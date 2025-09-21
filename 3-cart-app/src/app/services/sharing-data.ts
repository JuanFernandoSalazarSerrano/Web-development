import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SharingData {

  private _idProductEventEmitter: EventEmitter<number> = new EventEmitter();

  private _ProductEventEmitter: EventEmitter<Product> = new EventEmitter();

  constructor() {

  }

  get idProductEventEmitter() {

    return this._idProductEventEmitter

  }

  get ProductEventEmitter() {

    return this._ProductEventEmitter

  }

}
