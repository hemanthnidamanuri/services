import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {DataServiceService} from "../data-service.service";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnDestroy {

  value: number;
  subscription: Subscription;

  constructor(private service: DataServiceService) {

    this.service.getValue().subscribe((value: number) => {
      this.value = value;
      console.log('parent', this.value);

    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
