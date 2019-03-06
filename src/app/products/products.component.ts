import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  selectedProduct :Product
  constructor(private productService: ProductService) { }

  onSelectProduct(product){
    this.selectedProduct = product;
    this.productService.getProduct(2)
      .subscribe(product => console.log(product));
  }
  ngOnInit() {
    this.getProducts3();
  }
  getProducts(): void{
    const products = this.productService.getProducts();
    this.products = products;
  }
  getProducts2(): void{
    this.productService.getProducts2()
    .subscribe(products => this.products = products) ;
  }
  getProducts3(): void{
    this.productService.getProducts3()
      .subscribe(products => this.products = products) ;
  }
}
