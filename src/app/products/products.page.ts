import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  isLoading = false;

  constructor( private router: Router ) { }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      console.log('Products is loaded successfully');
      this.isLoading = false
    }, 2000);
  }

  onClickCars() {
    this.router.navigateByUrl('/products/cars')
  }

}
