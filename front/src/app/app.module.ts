import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthModule } from './modules/auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TOAST_NOTIFICATIONS_CONFIG, ToastNotificationsModule } from "ngx-toast-notifications";
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';
import { UsersModule } from './modules/users/users.module';
import { SharedModule } from './shared/shared.module';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { BooksModule } from './modules/books/books.module';
import { JournalsModule } from './modules/journals/journals.module';
import { BooksJournalsModule } from './modules/books-journals/books-journals.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastNotificationsModule,
    AuthModule,
    UsersModule,
    SharedModule,
    BooksModule,
    JournalsModule,
    BooksJournalsModule

  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
    },
    { provide: TOAST_NOTIFICATIONS_CONFIG, useValue: { duration: 5000, type: 'dark', position: 'top-left' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
