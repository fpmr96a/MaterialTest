import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule, MatMenuModule,
        MatTabsModule, MatCardModule, MatIconModule,
        MatFormFieldModule, MatInputModule, MatTableModule, 
        MatToolbarModule, MatSortModule,  MatSidenavModule,
        MatRadioModule, MatSnackBarModule  } from '@angular/material';
import { MatDialogModule} from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';        

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTransferlistComponent } from './transferlists/my-transferlist.component';
import { FilteredTransferlistComponent } from './transferlists/filtered-transferlist.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VacanciesComponent } from './vacancy/vacancies.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ReportsComponent } from './reports/reports.component';

import { ConfirmDialogComponent } from './dialog/confirm-dialog.component';
import { NewMyTransferlistDialogComponent } from './transferlists/new-my-transferlist-dialog.component';
import { EmployeeProfileDialogComponent } from './admin/employee-profile-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MyTransferlistComponent,
    FilteredTransferlistComponent,
    VacanciesComponent,
    ReportsComponent,
    ConfirmDialogComponent,
    NewMyTransferlistDialogComponent,
    EmployeeProfileDialogComponent
  ],
  entryComponents: [
    EmployeeProfileDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatRadioModule,
    MatSnackBarModule,
    FlexLayoutModule,
    GridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
