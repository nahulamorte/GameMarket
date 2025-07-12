import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})

export class InputInteger implements OnInit{

  constructor(){}

  @Input() quantity: number; 

  @Input() max: number; 

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    
  }

  upQuantity(): void{
    if(this.max && this.quantity < this.max)
      this.quantity++;
      this.quantityChange.emit(this.quantity);

  }

  downQuantity(): void{
    if (this.quantity > 0){
        this.quantity--;
        this.quantityChange.emit(this.quantity);
    }
  }

  onChangeQuantity(event:Event): void{
    this.quantityChange.emit(this.quantity);
  }
  
}
