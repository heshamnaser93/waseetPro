import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarsService} from "./cars.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {CarModel} from "./car-item/car.model";
@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit, OnDestroy {
  cars = [];
  fetchedCars = [];
  isLoading = false;
  public items: any;
  private subscriptionEl: Subscription;

  constructor( private carsService: CarsService,
               private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.subscriptionEl =this.carsService.fetchCars().subscribe( resCars => {
      this.cars = resCars;
      this.fetchedCars = resCars;
      this.isLoading = false
    });
  }

  setFilteredCars(ev: Event) {
    if(this.fetchedCars.length > 0) {
      // @ts-ignore
      const searchedValue = ev.target.value;
      const filteredCars = [];
      let car: CarModel;
      for (car of this.fetchedCars) {
        if(car.brand === searchedValue) {
          filteredCars.push(car);
        }
      }
      searchedValue.length === 0 ? this.cars = this.fetchedCars : this.cars = filteredCars;
    }
  }

  carSpecs(carId: string) {
    this.router.navigate(['/', 'products', 'cars', carId]);
  }

  addNewCar() {
    this.router.navigateByUrl('/products/cars/new-car')
  }

  ngOnDestroy() {
    if (this.subscriptionEl) {
      this.subscriptionEl.unsubscribe();
    }
  }
}
