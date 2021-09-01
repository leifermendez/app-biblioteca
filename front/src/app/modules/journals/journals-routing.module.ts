import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJournalComponent } from './pages/add-journal/add-journal.component';
import { JournalDetailComponent } from './pages/journal-detail/journal-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AddJournalComponent
  },
  {
    path: ':id',
    component: AddJournalComponent
  },
  {
    path: 'detail/:id',
    component: JournalDetailComponent
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
export class JournalsRoutingModule { }
