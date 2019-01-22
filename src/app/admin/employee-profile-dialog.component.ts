import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeProfile } from '../models/EmployeeProfile';

@Component({
  selector: 'app-employee-profile-dialog',
  templateUrl: './employee-profile-dialog.component.html',
  styleUrls: ['./employee-profile-dialog.component.css']
})
export class EmployeeProfileDialogComponent implements OnInit {

  employeeProfile: EmployeeProfile;
  constructor(private dialogRef: MatDialogRef<EmployeeProfileDialogComponent>) {
    
   }

  ngOnInit() {
    // this.employeeProfile = new EmployeeProfile();
  }

  save() {
    this.dialogRef.close(this.employeeProfile);
  }

  dismiss() {
    this.dialogRef.close(null);
  }

}
