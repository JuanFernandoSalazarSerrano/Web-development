import { createReducer, on } from '@ngrx/store';
import { CartItem } from '../models/cartItem';
import { onAddCart, onDeleteCart } from './items.action';
import Swal from 'sweetalert2';

export interface ItemState {
  items: CartItem[]
}

export const initialStateItems: ItemState = {items: JSON.parse(sessionStorage.getItem('cart')!) || []};

export const itemsReducer = createReducer(
  initialStateItems,

  on(onDeleteCart, (state, {id}) => {

    return {items: state.items.filter(item => item.product.id !== id)}

  }),

  on(onAddCart, (state, {product}) => {

  // The find() method returns the value of the first element that passes a test.
  // The find() method executes a function for each array element.

    const hasItem = state.items.find((item: CartItem) => item.product.id === product.id);

// In your code, item is a variable representing each element of the items array.

    if (hasItem) {

      return {items: state.items.map((item: CartItem) => {

        if (item.product.id === product.id){
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item
      })}
    }
    else{
      // this is kinda buggy i dont know why in the first time i add a product to the cart this else triggers,
      // hasItem is undefined the firts time...??
      Swal.fire({title:'Shopping', text: product.name + " has been added to the cart", icon: 'success'});
      return {items: [...state.items, { product: {...product}, quantity: 1 }]};

    }

    }


  )
);
