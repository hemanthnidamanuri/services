import { Injectable } from '@angular/core';
import{Observable , Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private  subject  = new Subject<any>();

  sendData(incrementedValue: number){
        this.subject.next(incrementedValue);
  }

  getValue(): Observable<any>{
  return this.subject.asObservable();

  }
}
