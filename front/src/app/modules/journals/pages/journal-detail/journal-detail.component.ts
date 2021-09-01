import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { JournalsService } from '../../services/journals.service';

@Component({
  selector: 'app-journal-detail',
  templateUrl: './journal-detail.component.html',
  styleUrls: ['./journal-detail.component.css']
})
export class JournalDetailComponent implements OnInit {
  public form!: FormGroup;
  public loading!: boolean;
  public id!: string;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
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
  getJournal() {
    this.journalsService.getJournal(this.id).subscribe((res: any) => {
      this.form.patchValue(res.data);

    })
  }
}
