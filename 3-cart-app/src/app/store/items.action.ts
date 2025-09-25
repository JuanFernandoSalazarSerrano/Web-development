import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product';

export const onAddCart = createAction(
  '[cart-app component] add product to items list',
   props<{product: Product}>()
  );

export const onDeleteCart = createAction(
  '[cart-app component] remove product to items list',
   props<{id: number}>()
  );

