import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: Product={
    id:1,
    name:'iPhone',
    price:650
  }
  constructor() { }

  ngOnInit() {
    console.log('This is the OnInit lifecycle');
  }

}
