import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LoansService } from '../../services/loans.service';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent implements OnInit {
  displayedColumns: string[] = ['author', 'title', 'edition', 'keyword', 'description', 'theme', 'specimens', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  journals: any[] = [];
  history: string = ''
  query: any;
  loading!: boolean;
  constructor(
    private loansService: LoansService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.history = params.history ? params.history : '';
      this.loads();
    });
  }

  loads() {
    if (this.history) {
      this.query = ''
    } else {
      this.query = [
        `?status=borrowed`,
      ].join('');
    }
    this.loansService.getloansjournals(this.query).subscribe((res: any) => {
      this.journals = res.data;
      this.dataSource = new MatTableDataSource(this.journals);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  returnJournal(loan: any) {
    this.loading = true;
    const { idJournal = null, idLoan = null } = loan;
    const body = {
      journal: idJournal
    }
    this.loansService.returnloansJournal(idLoan, body)
      .pipe(finalize(() => this.loading = false))
      .subscribe(res => {
        this.loads();
      }, err => this.loading)
  }

}
