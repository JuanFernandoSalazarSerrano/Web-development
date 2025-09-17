import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productService';
import { Product } from '../models/product';
import { Catalog } from './catalog/catalog';
import { Cart } from './cart/cart';
import { CartItem } from '../models/cartItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cart-app',
  imports: [Catalog, Cart, CommonModule],
  templateUrl: './cart-app.html',
})
export class CartApp implements OnInit {

  products: Product[] = [];

  items: CartItem[] = [];

  quantity: number = 1;

  showCart: boolean = false;

  constructor(private service: ProductService) {

   }
  ngOnInit(): void {
    this.products = this.service.findAll()
    this.items = JSON.parse(sessionStorage.getItem('cart')!) || [];
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
    this.saveSession()

  }

  onDeleteCart(product: Product): CartItem[] {
    this.items = this.items.filter(item => item.product.id !== product.id);
    this.saveSession()
    return this.items
  }

  clearCart(): CartItem[]{
    this.items = []
    this.saveSession()
    return this.items
  }

  saveSession(): void{
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }

  onDecreaseQuantityCart(product: Product) {

// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.

    const hasItem = this.items.find(item => item.product.id === product.id);

// In your code, item is a variable representing each element of the items array.

    if (hasItem) {

      this.items = this.items.map(item => {

        if (item.product.id === product.id){
          if(item.quantity < 1){
            return {
            ...item,
            quantity: 0
          }
          }

          return {
            ...item,
            quantity: item.quantity - 1
          }
        }
        return item
      })
    }
    else{
      this.items = [...this.items, { product: {...product}, quantity: this.quantity }];
    }
    this.saveSession()

  }
}
