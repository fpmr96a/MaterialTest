import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { ToDo } from '../models/ToDo';

@Injectable({
  providedIn: 'root'
})
export class TransferlistService {
  //private transferlistUrl = 'api/todo';
  private transferlistUrl = 'https://localhost:5001/api/Todo/ ';
  // the value assigned, when using a real back-end web service would be:
  //  'www.myWebService.com/api/products';

  constructor(private http: HttpClient) { }

  getToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.transferlistUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }


  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}