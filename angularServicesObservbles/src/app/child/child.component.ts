import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../data-service.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  x = 100;
  constructor(private service: DataServiceService) { }

  ngOnInit() {
  }

  sendValue(): void{
    this.x++;
    this.service.sendData(this.x);
}

}
