import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'

import { TransferlistService } from './transferlist.service.service';
import { ToDo } from '../models/ToDo';
import { MyTransferList } from '../models/MyTransferList';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


@Component({
  selector: 'app-filtered-transferlist',
  templateUrl: './filtered-transferlist.component.html',
  styleUrls: ['./filtered-transferlist.component.css']
})
export class FilteredTransferlistComponent implements OnInit {
  jobClassFormControl = new FormControl('', Validators.required);
  selectedRowIndex: number;
  errorMessage = '';

  ToDos: ToDo[] = [];
  filteredTransferLists: MyTransferList[] = [];

  displayedColumns: string[] = ['facility_Short_Description', 'functionalUnitDescription', 'shiftDescription', 'fT_PT_Description'];
  //dataSource = new MatTableDataSource<MyTransferList>(this.filteredTransferLists);
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private transferlistService: TransferlistService) { }

  ngOnInit(): void {
    this.transferlistService.getToDos().subscribe(
      todos => {
        this.ToDos = todos;
      },
      error => this.errorMessage = <any>error
    );

    this.jobClassFormControl.valueChanges.subscribe(
      value => console.log(value)
    );

    //this.dataSource.paginator = this.paginator;

    this.transferlistService.getMyTransferListByJobcode('5724').subscribe(
      mytransferlists => {
        this.dataSource.data = mytransferlists;
        this.dataSource.sort = this.sort;
      /*   this.filteredTransferLists = mytransferlists; */
      },
      error => this.errorMessage = <any>error
    );
     
  }

  highlight(row){
    this.selectedRowIndex = row.id;
    }
  
  /* public dataStateChange(state: DataStateChangeEvent): void {
      this.state = state;
      this.gridData = process(this.MyTransferLists, this.state);
  }
 */
}
