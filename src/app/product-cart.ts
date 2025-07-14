import { Injectable } from '@angular/core';
import { Product } from './product-list/Product';
import { ShoppingCart } from './shopping-cart/shopping-cart';
import { BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class ProductCartService {

  private _cartList: Product[] = [];
  
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList);

  constructor() { }
  
  addToCart(product: Product) {
    let item: Product | undefined = this._cartList.find((v1)=>v1.name==product.name);    
    if (!item){
      this._cartList.push({... product}); 
    } else {
      item.quantity += product.quantity;
    }
    this.cartList.next(this._cartList);
  }

  vaciarCarrito() {
    this.cartList.next([]);
  }
}
