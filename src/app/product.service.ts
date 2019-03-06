import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Product} from './product'
import {Observable} from 'rxjs/Observable'
import {of} from 'rxjs/observable/of'
import {catchError,map,tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'applcation/json'})
};
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
    id:3,
    name:'iPad',
    price:2000
  },
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private productsUrl = 'api/products';

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error,`Operation: ${operation}`);
      return of(result as T);
    }


  }

  getProducts(): Product[] {
    return products;
  }
  getProducts2(): Observable<Product[]> {
    return of(products);
  }
  getProducts3(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        tap(products => console.log('Fetched Products')),
        catchError(this.handleError('getProducts',[]))
      );
  }
  getProduct(id: number): Observable<Product>{
    const url = `${this.productsUrl}/${id}`;

    return this.http.get<Product>(url).pipe(
      tap(_=> console.log(`Fetched product of id  ${id}!`)),
      catchError(this.handleError<Product>(`getHero id=${id}`))
    );
  }
  updateProduct(product: Product): Observable<any>{
    return this.http.put(this.productsUrl, product, httpOptions).
      pipe(
        tap(_=> console.log(`Updated product of id ${product.id}!`)),
        catchError(this.handleError<any>('updateProduct'))
    );
  }
  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.productsUrl, product, httpOptions).
      pipe(
        tap(_=> console.log(`Added product with id ${product.id}!`)),
        catchError(this.handleError<Product>('addProduct'))
    );
  }
  deleteProduct(productId: number): Observable<Product> {
    const url= `${this.productsUrl}/${productId}`;

    return this.http.delete<Product>(url, httpOptions)
      .pipe(
        tap(_=> console.log(`Deleted product of id ${productId}!`)),
        catchError(this.handleError<Product>('deleteProduct'))
      )
  }
}
