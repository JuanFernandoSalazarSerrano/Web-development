import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class SharingData {

  private readonly _idProductEventEmitter: EventEmitter<number> = new EventEmitter();

  private readonly _ProductEventEmitter: EventEmitter<Product> = new EventEmitter();

  private readonly _productEventEmitterClearCart: EventEmitter<void> = new EventEmitter<void>();

  private readonly _productEventEmitterDecrease: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {

  }

  get idProductEventEmitter() {

    return this._idProductEventEmitter

  }

  get ProductEventEmitter() {

    return this._ProductEventEmitter

  }

  public get productEventEmitterClearCart(){
    return this._productEventEmitterClearCart;
  }

    public get productEventEmitterDecrease(): EventEmitter<Product> {
    return this._productEventEmitterDecrease;
  }

}
