import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable , throwError } from "rxjs";
import {catchError} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

    getdata(): Observable<any> {

    return this.http.get(this.url);//.pipe(catchError(this.handleError));

    }

    // handleError(error): any {
    //
    //   let errorMessage = '';
    //
    // if(error.error instanceof ErrorEvent){
    //
    //   errorMessage = `Error: ${error.error.message}`;
    //
    //   } else {
    //
    //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    //
    //   }
    //
    // window.alert(errorMessage);
    //
    // return throwError(errorMessage);
    //
    // }
}
