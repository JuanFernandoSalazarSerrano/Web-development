import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { ProductCardInCart } from '../product-card-in-cart/product-card-in-cart';
import { Product } from '../../models/product';

@Component({
  selector: 'cart',
  imports: [ProductCardInCart],
  templateUrl: './cart.html',
})
export class Cart {

  @Input() items: CartItem[] = [];

  @Output() productEventEmitterClearCart: EventEmitter<Product> = new EventEmitter<Product>();
  onClickClearCart() {
    this.productEventEmitterClearCart.emit();
  }

  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter<Product>();
  onClickDeleteCart(product: Product) {
    this.productEventEmitter.emit(product);
  }

  @Output() productEventEmitterIncrease: EventEmitter<Product> = new EventEmitter<Product>();
  onClickAddCart(product: Product) {
    this.productEventEmitterIncrease.emit(product);
  }

  @Output() productEventEmitterDecrease: EventEmitter<Product> = new EventEmitter<Product>();
  onClickDecreaseCart(product: Product) {
    this.productEventEmitterDecrease.emit(product);
  }

  calculateTotal(items: CartItem[]): number {

// sum is the accumulator (starts at 0).
// item is each CartItem in the items array.
// For each item, it adds item.quantity * item.product.price to sum.
// The final result is the total price of all items in the cart.
// Summary:
// reduce lets you combine all elements of an array into a single value by applying a function to each element and accumulating the result.

    return items.reduce((sum, item) => sum + (item.quantity * item.product.price), 0);

  }
}
