import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { HttpClient, HttpClientModule } from '@angular/common/http';


import { ProductList } from './product-list/product-list';
import { ShoppingCart } from './shopping-cart/shopping-cart';
import { GameMarketAbout } from './game-market-about/game-market-about';
import { GameMarketProducts } from './game-market-products/game-market-products';
import { InputInteger } from './input-integer/input-integer';
import { ProductForm } from './product-form/product-form';
import { ProductInventory } from './product-inventory/product-inventory';

@NgModule({
  declarations: [
    App,
    ProductList, //product-list-component
    ShoppingCart,//cart-component
    GameMarketAbout, //GameMarket-About-component
    GameMarketProducts, //GameMarket-Products-component
    InputInteger, //InputInteger-component
    ProductForm, ProductInventory,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
