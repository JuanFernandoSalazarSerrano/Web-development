import { Component, Input } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { ProductCardInCart } from '../product-card-in-cart/product-card-in-cart';

@Component({
  selector: 'cart',
  imports: [ProductCardInCart],
  templateUrl: './cart.html',
})
export class Cart {

  @Input() items: CartItem[] = [];

}
