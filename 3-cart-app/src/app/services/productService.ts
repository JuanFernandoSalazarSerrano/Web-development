import { Injectable} from '@angular/core';
import { PRODUCTS } from '../data/product.data';
import { Product } from '../models/product';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService{

  findAll(): Observable<Product[]> {
    return of(PRODUCTS);
  }
}
