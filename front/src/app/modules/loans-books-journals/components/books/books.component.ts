import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LoansService } from '../../services/loans.service';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  displayedColumns: string[] = ['author', 'title', 'edition', 'keyword', 'description', 'theme', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  books: any[] = [];
  history: string = ''
  query: any;
  loading!: boolean;
  constructor(
    private loansService: LoansService,
    private activatedRoute: ActivatedRoute,

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

    this.loansService.getloansBook(this.query).subscribe((res: any) => {
      this.books = res.data;
      this.dataSource = new MatTableDataSource(this.books);
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
  returnLoans(loan: any) {
    this.loading = true
    const { idBook = null, idLoan = null } = loan;
    const body = {
      book: idBook
    }
    this.loansService.returnloansBook(idLoan, body)
      .pipe(finalize(() => this.loading = false))
      .subscribe(res => {
        this.loads();
      }, err => this.loading = false)
  }

}
