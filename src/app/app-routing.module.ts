import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTransferlistComponent } from './transferlists/my-transferlist.component';
import { FilteredTransferlistComponent } from './transferlists/filtered-transferlist.component';



const routes: Routes = [
  { path: 'mytransferlist', component: MyTransferlistComponent },
  { path: 'filteredtransferlist', component: FilteredTransferlistComponent },
  { path: '', redirectTo: 'mytransferlist', pathMatch: 'full'},
  { path: '**', redirectTo: 'mytransferlist', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
