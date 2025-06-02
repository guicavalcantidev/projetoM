import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PotterApiService {

  private urlBase: string = 'https://potterapi-fedeperin.vercel.app/pt';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(error.error.message);
    } else {
      console.error(error.status);
    }
    return throwError('Deu erro nessa bixiga!');
  }

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlBase}/books`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getBookByIndex(index: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlBase}/books?index=${index}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

}
