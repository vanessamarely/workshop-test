import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiRoot: string = 'https://run.mocky.io/v3/7015be8f-9657-4eda-af57-ca508c855e66';
  
  constructor(private http: HttpClient) { }

  getApi(){
    return this.http.get<Array<{}>>(this.apiRoot)
    .pipe(map(data => data), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse){
    return observableThrowError(res.error || 'Server error');
  }
}
