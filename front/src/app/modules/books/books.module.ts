import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BooksRoutingModule } from './books-routing.module';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { AddBooksComponent } from './pages/add-books/add-books.component';
import { SharedModule } from '../../shared/shared.module';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';


@NgModule({
  declarations: [
    ListBooksComponent,
    AddBooksComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    ListBooksComponent
  ]
})
export class BooksModule { }
