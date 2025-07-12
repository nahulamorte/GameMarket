import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../product-list/Product';
import { ProductDataService } from '../product-data';


@Component({
  selector: 'app-form-control-products',
  standalone: false,
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss'
})

export class ProductForm{
  constructor(private productDataService: ProductDataService) {}

  productForm = new FormGroup({
    name: new FormControl<string>('', { 
      nonNullable: true, 
      validators: [Validators.required, Validators.minLength(5)] 
    }),
    img: new FormControl<string>('', { 
      nonNullable: true, 
      validators: [Validators.required] 
    }),
    price: new FormControl<number>(0, { 
      nonNullable: true, 
      validators: [Validators.required, Validators.min(1)] 
    }),
    description: new FormControl<string>('', { 
      nonNullable: true, 
      validators: [Validators.minLength(20)] 
    }),
    stock: new FormControl<number>(0, { 
      nonNullable: true, 
      validators: [Validators.required] 
    }),
    clearence: new FormControl<boolean>(false, { 
      nonNullable: true 
    }),
    quantity: new FormControl<number>(0, { 
      nonNullable: true, 
      validators: [Validators.required, Validators.min(1)] 
    }),
  });

  // post
  public insertProduct(): void {
    const formValue = this.productForm.getRawValue();
    console.log(formValue);

    const product: Product = { ...formValue };

    this.productDataService.insertProduct(product).subscribe(() => {
      this.productForm.reset();
    });
  }
}
