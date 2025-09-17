import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productService';
import { Product } from '../models/product';
import { Catalog } from './catalog/catalog';
import { Cart } from './cart/cart';
import { CartItem } from '../models/cartItem';

@Component({
  selector: 'cart-app',
  imports: [Catalog, Cart],
  templateUrl: './cart-app.html',
})
export class CartApp implements OnInit {

  products: Product[] = [];

  items: CartItem[] = [];

  quantity: number = 0;

  constructor(private service: ProductService) {

   }
  ngOnInit(): void {
    this.products = this.service.findAll()
  }

  onAddCart(product: Product) {

    this.items = [...this.items, { product: {...product}, quantity: this.quantity }];

  }
}
