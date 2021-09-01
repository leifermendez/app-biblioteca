import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { NotificacitionService } from 'src/app/shared/services/notificacition.service';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  public form!: FormGroup;
  public loading!: boolean;
  public id!: string;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private notificacition: NotificacitionService,
    private activatedRoute: ActivatedRoute,
    private booksService: BooksService,
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      author: ['', [Validators.required]],
      title: ['', [Validators.required]],
      edition: ['', [Validators.required]],
      keyword: ['', [Validators.required]],
      description: ['', [Validators.required]],
      theme: ['', Validators.required],
      copy: ['', Validators.required],
      available: ['', Validators.required]
    });

    this.activatedRoute.params.subscribe(params => {
      this.id = params.id ? params.id : '';
      if (this.id) {
        this.getBook();
      }
    });
  }

  onSubmit() {
    this.loading = true;
    if (this.id) {
      this.booksService.updateBook(this.id, this.form.value)
        .pipe(finalize(() => this.loading = false))
        .subscribe(res => {
          this.notificacition.showToast('Libro Actualizado', 'Libro actualizado satisfactioriamente')
          this.router.navigate(['/', 'books-journals'])
        })
      return
    }
    this.booksService.registerBook(this.form.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe(res => {
        this.notificacition.showToast('Libro Registrado', 'Libro registrado satisfactioriamente')
        this.router.navigate(['/', 'books-journals'])
      })
  }

  getBook() {
    this.loading = true;
    this.booksService.getBook(this.id)
      .pipe(finalize(() => this.loading = false))
      .subscribe((res: any) => {
        this.form.patchValue(res.data)
      })
  }

  cancel() {
    this.notificacition.confirm('Cancelar', 'Esta seguro que desea cancarlar esta operación', 'Ok')
      .then((res) => {
        this.router.navigate(['/', 'books-journals'])
      }).catch((err) => {
        console.log(err);
      });
  }

}

