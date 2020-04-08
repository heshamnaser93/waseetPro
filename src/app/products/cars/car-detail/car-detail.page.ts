import {Component, OnDestroy, OnInit} from '@angular/core';
import {SegmentChangeEventDetail} from '@ionic/core'
import {NavController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {CarsService} from "../cars.service";
import {CarDetailModel} from "./car-detail.model";


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.page.html',
  styleUrls: ['./car-detail.page.scss'],
})
export class CarDetailPage implements OnInit, OnDestroy {
  car: CarDetailModel;
  tabs: any = {
    first: 'first',
    second: 'second',
    third: 'third',
    selectedTab: 'first'
  };
  _infoTab = true;
  _detailTab = false;
  _mapTab = false;
  isLoading = false;
  currType: string;
  subscriptionEl: Subscription;

  constructor( private route: ActivatedRoute,
               private navCtrl: NavController,
               private carService: CarsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('carId')) {
        this.navCtrl.navigateBack('/products/cars');
        return;
      }
      this.isLoading = true;
      this.subscriptionEl = this.carService
          .getCar(paramMap.get('carId'))
          .subscribe(car => {
            this.car = car;
            console.log(this.car);
            this.currType = this.carService.currencyConverter(this.car.currency);
            this.isLoading = false;
          })
    });
  }

  // adding pagination for car images slides
  slidesOpts = {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    }
  };


  // changing content by ion-segment && ion-segment-button
  segmentChanged(event: CustomEvent<SegmentChangeEventDetail>) {
    if (event.detail.value === this.tabs.first) {
      this._infoTab = true;
      this._detailTab = false;
      this._mapTab = false;
    } else if (event.detail.value === this.tabs.second) {
      this._infoTab = false;
      this._detailTab = true;
      this._mapTab = false;
    } else {
      this._infoTab = false;
      this._detailTab = false;
      this._mapTab = true;
    }
  }


  ngOnDestroy() {
    if (this.subscriptionEl) {
      this.subscriptionEl.unsubscribe();
    }
  }

}
