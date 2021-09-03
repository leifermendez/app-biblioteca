import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  public form!: FormGroup;
  public loading!: boolean;
  public id!: string;
  constructor(
    private formBuilder: FormBuilder,
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

  getBook() {
    this.loading = true;
    this.booksService.getBook(this.id)
      .pipe(finalize(() => this.loading = false))
      .subscribe((res: any) => {
        this.form.patchValue(res.data)
      })
  }


}
