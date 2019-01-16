import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatCheckboxModule, MatMenuModule,
        MatTabsModule, MatCardModule, MatIconModule,
        MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule,  MatSidenavModule,} from '@angular/material';
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


@NgModule({
  declarations: [
    AppComponent,
    MyTransferlistComponent,
    FilteredTransferlistComponent,
    VacanciesComponent,
    ReportsComponent,
    ConfirmDialogComponent
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
    FlexLayoutModule,
    GridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
