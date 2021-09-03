import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReportsService } from '../../services/reports.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  listReports: Array<any> = [
    {
      name: 'Usuarios con mas bibliografia',
      value: 'userLoan',
    },
    {

      name: 'Revistas mas prestadas',
      value: 'journalLoan',
    },
    {

      name: 'Revistas mas buscadas',
      value: 'journalViews',
    },
    {

      name: 'Libros mas prestados',
      value: 'bookLoan',
    },
    {

      name: 'Libros mas buscados',
      value: 'bookViews',
    },

  ]
  reportValue: string = '';
  report: string = '';
  data: any;
  loading!: boolean;
  constructor(
    private reportsService: ReportsService
  ) { }

  ngOnInit(): void {
  }

  getReport() {
    this.loading = true
    this.report = this.reportValue;

    const query = [
      `?report=${this.reportValue}`,
    ].join('');

    this.reportsService.getReports(query)
      .pipe(finalize(() => this.loading = false))
      .subscribe((res: any) => {
        this.data = res.data
      }, err => this.loading = false)
  }


}
