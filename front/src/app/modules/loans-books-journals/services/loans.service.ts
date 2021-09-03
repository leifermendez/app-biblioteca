import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { NotificacitionService } from '../../../shared/services/notificacition.service';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  private url: string = environment.api;
  constructor(
    public http: HttpClient,
    private notificacition: NotificacitionService
  ) { }


  loansBook(data: any) {
    return this.http.post(`${this.url}/booksLoans`, data)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }

  returnloansBook(id: string, data: any) {
    return this.http.patch(`${this.url}/booksLoans/${id}`, data)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }

  getloansBook(query: any = []): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/booksLoans${query}`)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }

  loansJournal(data: any) {
    return this.http.post(`${this.url}/journalLoans`, data)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }

  getloansjournals(query: any = []): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/journalLoans${query}`)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }

  returnloansJournal(id: string, data: any) {
    return this.http.patch(`${this.url}/journalLoans/${id}`, data)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }
}
