import { Injectable } from '@angular/core';
import {Product} from './product'

const products = [
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
];

@Injectable()
export class ProductService {

  constructor() {}
  getProducts(): Product[] {
    return products;
  }
}
