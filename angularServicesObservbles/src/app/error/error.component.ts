import { Component, OnInit } from '@angular/core';
import {ErrorService} from "../error.service";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  users: any;
  constructor(private es: ErrorService) { }

  ngOnInit() {
    this.es.getdata().subscribe((res: any) => {
      this.users = res;
    });
  }

}
