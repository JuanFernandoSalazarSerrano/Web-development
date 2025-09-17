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

// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.

    const hasItem = this.items.find(item => item.product.id === product.id);

// In your code, item is a variable representing each element of the items array.

    if (hasItem) {

      this.items = this.items.map(item => {

        if (item.product.id === product.id){

          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item
      })
    }
    else{
      this.items = [...this.items, { product: {...product}, quantity: this.quantity }];
    }

  }
}
