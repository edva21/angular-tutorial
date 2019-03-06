import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb(){
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
    return { products };
  }
  constructor() { }
}
