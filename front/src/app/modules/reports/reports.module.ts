import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './pages/reports/reports.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ListBooksLoansComponent } from './components/list-books-loans/list-books-loans.component';
import { ListUserComponent } from './components/list-user/list-user.component';


@NgModule({
  declarations: [
    ReportsComponent,
    ListBooksLoansComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
  ]
})
export class ReportsModule { }
