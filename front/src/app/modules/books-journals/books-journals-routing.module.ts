import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksJournalComponent } from './pages/books-journal/books-journal.component';

const routes: Routes = [
  {
    path: '',
    component: BooksJournalComponent
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
export class BooksJournalsRoutingModule { }
