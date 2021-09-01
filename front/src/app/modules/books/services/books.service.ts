import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { NotificacitionService } from '../../../shared/services/notificacition.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url: string = environment.api;
  constructor(
    public http: HttpClient,
    private notificacition: NotificacitionService
  ) { }

  registerBook(data: any) {
    return this.http.post(`${this.url}/books`, data)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/books`)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }
  getBook(id: string = ''): Observable<any> {
    return this.http.get<any>(`${this.url}/books/${id}`)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }

  updateBook(id: string, data: any) {
    return this.http.patch(`${this.url}/books/${id}`, data)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }

  deleteBook(id: string = ''): Observable<any> {
    return this.http.delete<any>(`${this.url}/books/${id}`)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }
}
