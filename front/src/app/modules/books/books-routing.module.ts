import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './pages/add-books/add-books.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AddBooksComponent
  },
  {
    path: ':id',
    component: AddBooksComponent
  },
  {
    path: 'detail/:id',
    component: BookDetailComponent
  },
  {
    path: '**',
    pathMatch: 'full', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
