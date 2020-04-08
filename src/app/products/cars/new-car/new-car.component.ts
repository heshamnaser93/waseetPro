import {Component, OnInit} from '@angular/core';
import {SegmentChangeEventDetail} from '@ionic/core'
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss'],
})
export class NewCarComponent implements OnInit {
  showTranslate = false;
  public sections: any = {
    first: 'first',
    second: 'second',
    selectedSection: 'first'
  };
  _adInfo = true;
  _carInfo = false;
  carForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.carForm = new FormGroup({
      adTitle: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      carPrice: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      address: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      engineCapacity: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      kilometer: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      internalColor: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      adLocation: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      transDescription: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
    })
  }

  showTranslateMethod() {
    this.showTranslate = true;
  }

  segmentChanged(event: CustomEvent<SegmentChangeEventDetail>) {
    if (event.detail.value === this.sections.first) {
      this._adInfo = true;
      this._carInfo = false;
    } else {
      this._adInfo = false;
      this._carInfo = true
    }
  }

  goForward() {
    this.sections.selectedSection = this.sections.second;
  }

  goBack() {
    this.showTranslate = false;
  }

}
