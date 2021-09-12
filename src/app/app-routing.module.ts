import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CartdetailsComponent } from './cartdetails/cartdetails.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { FooddetailsComponent } from './fooddetails/fooddetails.component';

const routes: Routes = [
  {path:"adminlogin",component:AdminloginComponent},

  {path:"fooddetails",component:FooddetailsComponent},

  {path:"customerlogin", component:CustomerloginComponent},
  {path:"cartdetails",component:CartdetailsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
