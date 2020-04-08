import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsPage } from './cars.page';
import {NewCarComponent} from "./new-car/new-car.component";

const routes: Routes = [
  {
    path: '',
    component: CarsPage
  },
  {
    path: 'new-car',
    component: NewCarComponent
  },
  {
    path: ':carId',
    loadChildren: () => import('./car-detail/car-detail.module').then( m => m.CarDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsPageRoutingModule {}
