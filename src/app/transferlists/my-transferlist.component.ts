import { Component, OnInit } from '@angular/core';
import { process, State } from '@progress/kendo-data-query';
import { sampleProducts } from '../../assets/data/products';

import {
  GridComponent,
  GridDataResult,
  DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-my-transferlist',
  templateUrl: './my-transferlist.component.html',
  styleUrls: ['./my-transferlist.component.css']
})
export class MyTransferlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public state: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: [{ field: 'ProductName', operator: 'contains', value: 'Chef' }]
    }
  };

  public gridData: GridDataResult = process(sampleProducts, this.state);

  public dataStateChange(state: DataStateChangeEvent): void {
      this.state = state;
      this.gridData = process(sampleProducts, this.state);
  }

}
