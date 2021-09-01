import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificacitionService } from 'src/app/shared/services/notificacition.service';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = environment.api;
  constructor(
    public http: HttpClient,
    private notificacition: NotificacitionService
  ) { }

  registerUser(data: User) {
    return this.http.post(`${this.url}/users`, data)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }
  getUser(id: string): Observable<any> {
    return this.http.get(`${this.url}/users/${id}`)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }

  updateUser(id: string, data: User) {
    return this.http.patch(`${this.url}/users/${id}`, data)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }
  deleteUser(id: string) {
    return this.http.delete(`${this.url}/users/${id}`)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }
}
