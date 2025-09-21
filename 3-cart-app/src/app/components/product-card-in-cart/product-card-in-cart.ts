import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'product-card-in-cart',
  imports: [],
  templateUrl: './product-card-in-cart.html'
})
export class ProductCardInCart {

  @Input() item!: CartItem;

  @Output() productEventEmitter = new EventEmitter;
    onClickDeleteCart(productId: number) {
      this.productEventEmitter.emit(productId);
    }

  @Output() productEventEmitterIncrease: EventEmitter<Product> = new EventEmitter<Product>();
  onClickAddCart() {
    this.productEventEmitterIncrease.emit(this.item.product);
  }

  @Output() productEventEmitterDecrease: EventEmitter<Product> = new EventEmitter<Product>();
  onClickDecreaseCart() {
    this.productEventEmitterDecrease.emit(this.item.product);
  }
}
