import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: "restaurant",
    children : [
      {path:"list", component:ListComponent},
      {path:"details", component:DetailsComponent},
      {path:"add", component:AddComponent},
      {path:"update", component:UpdateComponent},
      { path: '**',component:PageNotFoundComponent }
    ]
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }