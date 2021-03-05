import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiRoot: string = 'https://run.mocky.io/v3/0933ddef-c9bf-4f26-8ddf-77990fb490cb';
  
  constructor(private http: HttpClient) { }

  getApi(){
    return this.http.get<Array<{}>>(this.apiRoot)
    .pipe(map(data => data), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse){
    return observableThrowError(res.error || 'Server error');
  }
}
