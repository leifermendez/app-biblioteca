import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

import { BooksJournalsRoutingModule } from './books-journals-routing.module';
import { BooksJournalComponent } from './pages/books-journal/books-journal.component';
import { SharedModule } from '../../shared/shared.module';
import { BooksModule } from '../books/books.module';
import { JournalsModule } from '../journals/journals.module';


@NgModule({
  declarations: [
    BooksJournalComponent
  ],
  imports: [
    CommonModule,
    BooksJournalsRoutingModule,
    SharedModule,
    MatTabsModule,
    BooksModule,
    JournalsModule
  ]
})
export class BooksJournalsModule { }
