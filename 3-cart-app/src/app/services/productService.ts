import { Injectable} from '@angular/core';
import { PRODUCTS } from '../data/product.data';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService{

  findAll(): Product[] {
    return PRODUCTS;
  }
}
