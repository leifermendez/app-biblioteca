import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JournalsRoutingModule } from './journals-routing.module';
import { AddJournalComponent } from './pages/add-journal/add-journal.component';
import { JournalDetailComponent } from './pages/journal-detail/journal-detail.component';
import { ListJournalsComponent } from './components/list-journals/list-journals.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AddJournalComponent,
    JournalDetailComponent,
    ListJournalsComponent
  ],
  imports: [
    CommonModule,
    JournalsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [ListJournalsComponent]
})
export class JournalsModule { }
