import { SharingData } from './../services/sharing-data';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productService';
import { Product } from '../models/product';
import { CartItem } from '../models/cartItem';
import { CommonModule } from '@angular/common';
import { Router, RouterModule} from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'cart-app',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart-app.html',
})
export class CartApp implements OnInit {

  products: Product[] = [];

  items: CartItem[] = [];

  quantity: number = 1;

  constructor(
    private SharingDataService: SharingData,
    private service: ProductService,
    private router: Router) {
  }

  ngOnInit(): void {

    this.products = this.service.findAll()

    this.items = JSON.parse(sessionStorage.getItem('cart')!) || [];

    this.onDeleteCart();
    this.onAddCart();

    this.SharingDataService.productEventEmitterClearCart.subscribe(() => {

      this.clearCart()
  });

  this.onDecreaseQuantityCart();

  }

  onAddCart(): void {

    this.SharingDataService.ProductEventEmitter.subscribe(product => {

    Swal.fire({title:'Shopping', text: product.name + " has been added to the cart", icon: 'success'});

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

          this.router.navigateByUrl('/', {skipLocationChange:true}).then(() => {

        this.router.navigate(['/cart'],{state: {items:this.items}})

      })

  })
  }

  onDeleteCart(): void {

      this.SharingDataService.idProductEventEmitter.subscribe(id => {

      const removedItem = this.items.find(item => item.product.id === id);
      this.items = this.items.filter(item => item.product.id !== id);

      if (removedItem) {
        Swal.fire({title:'Shopping', text: removedItem.product.name + " has been deleted from the cart", icon: 'error'});
      }

      this.saveSession()

      this.router.navigateByUrl('/', {skipLocationChange:true}).then(() => {

        this.router.navigate(['/cart'],{state: {items:this.items}})

      })

      return this.items

    })
  }

  clearCart(): CartItem[]{


    this.items = []

    Swal.fire({title:'Shopping', text:"You have emptied the cart", icon: 'info'});

    this.saveSession()

    this.router.navigateByUrl('/', {skipLocationChange:true}).then(() => {

        this.router.navigate(['/cart'],{state: {items:this.items}})

      })

    return this.items

  }

  saveSession(): void{
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }

  onDecreaseQuantityCart():void {

    this.SharingDataService.productEventEmitterDecrease.subscribe(product => {

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


    this.router.navigateByUrl('/', {skipLocationChange:true}).then(() => {

    this.router.navigate(['/cart'],{state: {items:this.items}})

  })
  })


}
}
