import { Component, OnInit } from '@angular/core';
import {  Product } from './Product';
import { ProductCartService } from '../product-cart';
import { ProductDataService } from '../product-data';

@Component({
  selector: 'app-game-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})

export class ProductList implements OnInit{

    products: Product[] = [];


    isDarkMode: false;

  

  constructor(
    private cart: ProductCartService,
    private produtcsService: ProductDataService) {}



  ngOnInit(): void {
    this.produtcsService.getAll().subscribe(products => this.products = products);
  }

    addToCart(product:Product): void{
      if(product.quantity>0) {
        this.cart.addToCart(product);
        product.stock -= product.quantity;
        product.quantity = 0;  
      } 
   }



}

