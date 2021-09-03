import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './pages/reports/reports.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent
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
export class ReportsRoutingModule { }
