import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { GameMarketAbout } from './game-market-about/game-market-about';
import {GameMarketProducts} from './game-market-products/game-market-products'
import { ProductInventory } from './product-inventory/product-inventory';


const routes: Routes = [
    {
      path:'',
      redirectTo: 'products',
      pathMatch: 'full'
    },
    {
      path: 'products', 
      component: GameMarketProducts
    },
    {
      path: 'inventory',
      component: ProductInventory,
    },
    {
      path: 'about',
      component: GameMarketAbout
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
