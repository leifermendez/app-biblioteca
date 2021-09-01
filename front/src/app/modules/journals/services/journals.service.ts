import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificacitionService } from '../../../shared/services/notificacition.service';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class JournalsService {
  private url: string = environment.api;
  constructor(
    public http: HttpClient,
    private notificacition: NotificacitionService
  ) { }

  registerJournals(data: any) {
    return this.http.post(`${this.url}/journals`, data)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }
  getJournals(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/journals`)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }
  getJournal(id: string = ''): Observable<any> {
    return this.http.get<any>(`${this.url}/journals/${id}`)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }

  updateJournals(id: string, data: any) {
    return this.http.patch(`${this.url}/journals/${id}`, data)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }
  deleteJournal(id: string = ''): Observable<any> {
    return this.http.delete<any>(`${this.url}/journals/${id}`)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }
}
