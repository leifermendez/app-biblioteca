import { Injectable } from '@angular/core';
import { NotificacitionService } from '../../../shared/services/notificacition.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private url: string = environment.api;
  constructor(
    public http: HttpClient,
    private notificacition: NotificacitionService
  ) { }

  getReports(query: any = []): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/reports${query}`)
      .pipe(
        catchError((e: any) => {
          this.notificacition.handleError(e.error.error)
          return throwError(e);
        })
      );
  }
}
