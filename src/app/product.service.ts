import { Injectable } from '@angular/core';
import {Product} from './product'
import {Observable} from 'rxjs/Observable'
import {of} from 'rxjs/observable/of'

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

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts(): Product[] {
    return products;
  }
  getProducts2(): Observable<Product[]> {
    return of(products);
  }
}
