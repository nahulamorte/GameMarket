import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product-list/Product';
 

const URL = 'https://687075577ca4d06b34b6d69b.mockapi.io/products';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {



  constructor(private http: HttpClient) { }

  public getAll():Observable<Product[]> { //{method: 'GET'}
    return this.http.get<Product[]>(URL)
    .pipe(tap((products: Product[]) => products.forEach(product => product.quantity = 0))); 
  }

  public insertProduct(product:Product):Observable<Product> {
    return this.http.post<Product>(URL, product);
  }
}

