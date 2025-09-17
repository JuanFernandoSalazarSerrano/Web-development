import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'product-card-in-cart',
  imports: [],
  templateUrl: './product-card-in-cart.html'
})
export class ProductCardInCart {

  @Input() item!: CartItem;

}
