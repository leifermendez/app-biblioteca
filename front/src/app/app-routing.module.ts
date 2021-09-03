import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'books-journals',
    loadChildren: () => import('./modules/books-journals/books-journals.module').then(m => m.BooksJournalsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'books',
    loadChildren: () => import('./modules/books/books.module').then(m => m.BooksModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'journals',
    loadChildren: () => import('./modules/journals/journals.module').then(m => m.JournalsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'loans',
    loadChildren: () => import('./modules/loans-books-journals/loans-books-journals.module').then(m => m.LoansBooksJournalsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reports',
    loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    useHash: true,
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
