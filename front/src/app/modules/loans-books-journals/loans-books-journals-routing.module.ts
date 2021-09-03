import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansComponent } from './pages/loans/loans.component';

const routes: Routes = [
  {
    path: '',
    component: LoansComponent
  },
  {
    path: ':history',
    component: LoansComponent
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
export class LoansBooksJournalsRoutingModule { }
