import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'

import { TransferlistService } from './transferlist.service.service';
import { ToDo } from '../models/ToDo';


@Component({
  selector: 'app-filtered-transferlist',
  templateUrl: './filtered-transferlist.component.html',
  styleUrls: ['./filtered-transferlist.component.css']
})
export class FilteredTransferlistComponent implements OnInit {
  jobClassFormControl = new FormControl('', Validators.required);

  errorMessage = '';

  ToDos: ToDo[] = [];

  constructor(private transferlistService: TransferlistService) { }

  ngOnInit(): void {
    this.transferlistService.getToDos().subscribe(
      todos => {
        this.ToDos = todos;
      },
      error => this.errorMessage = <any>error
    );

    this.jobClassFormControl.valueChanges.subscribe(
      id => console.log(id)
    );

       
  }

}
