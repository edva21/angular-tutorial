import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[]=[
    {
      id:1,
      name:'iPhone',
      price:650
    },
    {
      id:2,
      name:'MacBook Pro',
      price:2500
    },
    {
      id:2,
      name:'iPad',
      price:2000
    },
  ]
  constructor() { }

  ngOnInit() {
    console.log('This is the OnInit lifecycle');
  }

}
