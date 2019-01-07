import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { process, State } from '@progress/kendo-data-query';
import { sampleProducts } from '../../assets/data/products';

import {
  GridComponent,
  GridDataResult,
  DataStateChangeEvent
} from '@progress/kendo-angular-grid';

export interface JobClass {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-my-transferlist',
  templateUrl: './my-transferlist.component.html',
  styleUrls: ['./my-transferlist.component.css']
})
export class MyTransferlistComponent implements OnInit {
  jobClassFormControl = new FormControl('', Validators.required);

  jobClasses: JobClass[] = [
    {value: '1', viewValue: 'Clinical Social Worker'},
    {value: '2', viewValue: 'Clinical Social Worker Associate'},
    {value: '3', viewValue: 'Forensic Head Nurse'},
    {value: '4', viewValue: 'Forensic Nurse'},
    {value: '5', viewValue: 'Forensic Treatment Specialist'},
    {value: '6', viewValue: 'Head Nurse'},
    {value: '7', viewValue: 'Lead Forensic Treatment Specialist'},
    {value: '8', viewValue: 'Licensed Practical Nurse'}, 
  ]

  constructor() { }

  ngOnInit() {
    this.jobClassFormControl.valueChanges.subscribe(
       value => console.log(value)
    );
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
