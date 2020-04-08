import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarsPageRoutingModule } from './cars-routing.module';

import { CarsPage } from './cars.page';
import {CarItemComponent} from "./car-item/car-item.component";
import {NewCarComponent} from "./new-car/new-car.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CarsPage, CarItemComponent, NewCarComponent]
})
export class CarsPageModule {}
