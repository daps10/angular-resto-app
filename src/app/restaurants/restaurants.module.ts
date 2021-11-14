import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { RestaurantRoutingModule } from './restaurants-routing-module';
import { ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AddComponent,
    UpdateComponent,
    DetailsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    ReactiveFormsModule
  ]
})
export class RestaurantsModule { }
