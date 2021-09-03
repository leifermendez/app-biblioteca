import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BooksService } from '../../services/books.service';
import { NotificacitionService } from '../../../../shared/services/notificacition.service';
import { AuthService } from '../../../auth/services/auth.service';
import { LoansService } from '../../../loans-books-journals/services/loans.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  displayedColumns: string[] = ['author', 'title', 'edition', 'keyword', 'description', 'theme', 'copy', 'available', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  books: any[] = [];
  user: any;
  loading!: boolean;

  constructor(
    private booksService: BooksService,
    private notification: NotificacitionService,
    private authService: AuthService,
    private loansService: LoansService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loads();
    this.user = this.authService.currentUser();
  }

  loads() {
    this.booksService.getBooks().subscribe((res: any) => {
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
  deleteBook(id: string = '') {
    this.notification.confirm('Eliminar Libro', 'Esta seguro de querer eliminar este libro', 'Ok')
      .then((res) => {
        this.booksService.deleteBook(id)
          .subscribe(res => {
            this.loads();
          })

      }).catch((err) => {
        console.log(err);
      });
  }

  loansBook(id: string) {
    this.loading = true
    const body = {
      book: id
    }
    this.loansService.loansBook(body)
      .pipe(finalize(() => this.loading = false))
      .subscribe(res => {
        this.router.navigate(['/', 'loans'])
      }, err => this.loading = false)
  }


}

