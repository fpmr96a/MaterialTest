import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router'
import { MatDialog } from '@angular/material/dialog';
import { EmployeeProfileDialogComponent } from './admin/employee-profile-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Material Test';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router, 
              public dialog: MatDialog) {
    this.navLinks = [
        {
            label: 'My Transfer List',
            link: './mytransferlist',
            index: 0
        }, {
            label: 'Transfer List',
            link: './filteredtransferlist',
            index: 1
        }, {
          label: 'Vacancies',
          link: './vacancy',
          index: 1
        }, {
            label: 'Reports',
            link: './reports',
            index: 1
         }, {
            label: 'Stimulsoft Reports',
            link: './stimulsoft',
            index: 1
       }, 
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}

openEmployeeProfile(): void {
    let dialogRef = this.dialog.open(EmployeeProfileDialogComponent, {
        width: '450px',
        height: '470px',
        disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
    });
  }   

}
