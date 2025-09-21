import { SharingData } from './../../services/sharing-data';
import { Component, EventEmitter} from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { ProductCardInCart } from '../product-card-in-cart/product-card-in-cart';
import { Product } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'cart',
  imports: [ProductCardInCart],
  templateUrl: './cart.html',
})
export class Cart {

  items: CartItem[] = [];

  constructor(private SharingDataService: SharingData, private router: Router){
    this.items = this.router.currentNavigation()?.extras.state!['items']
  }

  onClickClearCart() {
    this.SharingDataService.productEventEmitterClearCart.emit()
  }

  onClickDeleteCart(id: number) {
    this.SharingDataService.idProductEventEmitter.emit(id)
  }

  // this could also be called, onClickIncreaseCart, for the right arrow increment i used in both buttons, add to cart and the > arrow button
  onClickAddCart(product: Product) {
    this.SharingDataService.ProductEventEmitter.emit(product)
  }

  onClickDecreaseCart(product: Product) {
    this.SharingDataService.productEventEmitterDecrease.emit(product);
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
