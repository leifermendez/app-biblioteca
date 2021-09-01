import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { NotificacitionService } from '../../../../shared/services/notificacition.service';
import { JournalsService } from '../../services/journals.service';

@Component({
  selector: 'app-add-journal',
  templateUrl: './add-journal.component.html',
  styleUrls: ['./add-journal.component.css']
})
export class AddJournalComponent implements OnInit {

  public form!: FormGroup;
  public loading!: boolean;
  public id!: string;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private notificacition: NotificacitionService,
    private activatedRoute: ActivatedRoute,
    private journalsService: JournalsService,
  ) { }
  ngOnInit(): void {

    this.form = this.formBuilder.group({
      author: ['', [Validators.required]],
      title: ['', [Validators.required]],
      edition: ['', [Validators.required]],
      keyword: ['', [Validators.required]],
      description: ['', [Validators.required]],
      currentFrequency: ['', [Validators.required]],
      specimens: ['', [Validators.required]],
      theme: ['', Validators.required],
      copy: ['', Validators.required],
      available: ['', Validators.required]
    });

    this.activatedRoute.params.subscribe(params => {
      this.id = params.id ? params.id : '';
      if (this.id) {
        this.getJournal();
      }
    });

  }

  onSubmit() {
    this.loading = true;
    if (this.id) {
      this.journalsService.updateJournals(this.id, this.form.value)
        .pipe(finalize(() => this.loading = false))
        .subscribe(res => {
          this.notificacition.showToast('Revista Actualizada', 'Revista actualizada satisfactioriamente')
          this.router.navigate(['/', 'books-journals'])
        })
      return
    }
    this.journalsService.registerJournals(this.form.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe(res => {
        this.notificacition.showToast('Revista Registrada', 'Revista registrada satisfactioriamente')
        this.router.navigate(['/', 'books-journals'])
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

  getJournal() {
    this.journalsService.getJournal(this.id).subscribe((res: any) => {
      this.form.patchValue(res.data);
    })
  }

}
