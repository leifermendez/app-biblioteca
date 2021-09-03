import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pagas/home/home.component';
import { AboutComponent } from './pagas/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
