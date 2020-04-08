import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {CarModel} from "./car-item/car.model";
import {CarDetailModel} from "./car-detail/car-detail.model";

interface CarData {
    listCar: [{
        id: string,
        adTitle: string,
        adDate: Date,
        adPrice: number,
        currency: number,
        category: string,
        categoryId: string,
        status: number,
        brandId: number,
        brand: string,
        brandModel: string,
        kilometer: number,
        modelYearId: number,
        modelYear: string,
        fuelType: string,
        carFeatureFuelId: number,
        gearType: string,
        carFeatureGearId: number,
        image: {
            path: string,
            name: string
        }
        vendorId: number
    }],
    "count": number,
    "responseStatusCode": number,
    "descriptionResponse": string
}

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private _cars = new BehaviorSubject([]);
  currAfter: string;

    constructor( private http: HttpClient ) { }

  get cars() {
    return this._cars.asObservable();
  }

  fetchCars() {
    return this.http
        .get<CarData>('https://bedonwaset.com/api/Cars/List?pageSize=5&currentpage=1', {
          headers: new HttpHeaders({
              'lang': '2',
              'Rate': '1'
            })
        }).pipe(
            map(resData => {
                const cars = [];
                for (const resCar of resData.listCar) {
                    cars.push(new CarModel(
                        resCar.id,
                        resCar.adTitle,
                        new Date(resCar.adDate),
                        resCar.adPrice,
                        resCar.currency,
                        resCar.category,
                        resCar.status,
                        resCar.brand,
                        resCar.brandModel,
                        resCar.kilometer,
                        resCar.modelYear,
                        resCar.fuelType,
                        resCar.gearType,
                        resCar.image,
                    ));
                }
                return cars;
            }),
            tap(cars => {
              this._cars.next(cars);
            })
        )
  }

  getCar(id: string) {
      return this.http
          .get<CarDetailModel>(
              `https://bedonwaset.com/api/Cars/Detail?id=${id}`, {
                  headers: new HttpHeaders({
                      'lang': '2',
                      'Rate': '1'
                  })
              }
          ).pipe(
              map(resCar => {
                  const carDetail = new CarDetailModel(
                      new Date(resCar.adDate),
                      resCar.adPrice,
                      resCar.currency,
                      resCar.adNumber,
                      resCar.country,
                      resCar.cityName,
                      resCar.category,
                      resCar.brand,
                      resCar.brandModel,
                      resCar.cylinder,
                      resCar.kilometer,
                      resCar.modelYear,
                      resCar.fuelType,
                      resCar.gearType,
                      resCar.exteriorColor,
                      resCar.image,
                  );
                  return carDetail;
              })
      )
  }

  currencyConverter(currNum: number):string {
      enum curr {tr = 1, usd = 2, eur = 3, grp = 4, kr = 5}
      this.currAfter = curr[currNum];
      return this.currAfter;
  }

}


