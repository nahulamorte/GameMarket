import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart';
import { Product } from '../product-list/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss'
})


export class ShoppingCart implements OnInit{
  
  cartList$: Observable<Product[]>;
  
  constructor(private cart: ProductCartService){
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
    
  }

}
