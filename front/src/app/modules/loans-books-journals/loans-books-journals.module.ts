import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansBooksJournalsRoutingModule } from './loans-books-journals-routing.module';
import { LoansComponent } from './pages/loans/loans.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../../shared/shared.module';
import { BooksComponent } from './components/books/books.component';
import { JournalsComponent } from './components/journals/journals.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    LoansComponent,
    BooksComponent,
    JournalsComponent,

  ],
  imports: [
    CommonModule,
    MatTabsModule,
    LoansBooksJournalsRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
  ]
})
export class LoansBooksJournalsModule { }
