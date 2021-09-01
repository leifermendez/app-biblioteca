import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoadingBtnDirective } from './directives/loading-btn.directive';


@NgModule({
  declarations: [
    NavbarComponent,
    LoadingBtnDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    LoadingBtnDirective

  ]
})
export class SharedModule { }
