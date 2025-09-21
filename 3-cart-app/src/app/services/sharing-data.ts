import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class SharingData {

  private _idProductEventEmitter: EventEmitter<number> = new EventEmitter();

  private _ProductEventEmitter: EventEmitter<Product> = new EventEmitter();

  private _productEventEmitterClearCart: EventEmitter<void> = new EventEmitter<void>();

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

}
