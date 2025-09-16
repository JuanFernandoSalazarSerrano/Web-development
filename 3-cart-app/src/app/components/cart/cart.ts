import { Component, Input } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'cart',
  imports: [ProductCard],
  templateUrl: './cart.html',
})
export class Cart {

  @Input() items: CartItem[] = [];

}
