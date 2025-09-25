import { createReducer, on } from "@ngrx/store"
import { findAll, load } from "./products.action"
import { Product } from "../models/product"

export interface ProductsState {
  products: Product[]
}

const initialStateProducts: ProductsState = {
  products: []
}

export const productsReducer = createReducer(
  initialStateProducts,

  on(load, (state) => ({products: [...state.products]})),
  on(findAll, (state, {products}) => ({products: [...products]}))

)
