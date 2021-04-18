import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerEditComponent } from './page/customer-edit/customer-edit.component';
import { CustomerListComponent } from './page/customer-list/customer-list.component';

const routes: Routes = [
  {
    path: "",
    component: CustomerListComponent
  },
  {
    path: "customer/:id",
    component: CustomerEditComponent
  },
  {
    path: '**',
    component: CustomerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
