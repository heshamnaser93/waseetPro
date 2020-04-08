import {Component, Input, OnInit} from '@angular/core';
import {CarModel} from "./car.model";
import {CarsService} from "../cars.service";

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss'],
})
export class CarItemComponent implements OnInit {
  @Input() car: CarModel;
  currType: string;


  constructor( private carService: CarsService ) { }

  ngOnInit() {
    this.currType = this.carService.currencyConverter(this.car.currency);
  }

}
