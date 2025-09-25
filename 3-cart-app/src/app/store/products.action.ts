import { createAction, props } from "@ngrx/store";
import { Product } from "../models/product";

export const load = createAction('load', props<{products: Product[]}>())
export const findAll = createAction('findAll', props<{products: Product[]}>())

