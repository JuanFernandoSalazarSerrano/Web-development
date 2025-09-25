import { ProductService } from './../../services/productService';
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { findAll, load } from '../products.action';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class ProductEffects{

    private actions$ = inject(Actions);
    private service = inject(ProductService)

    loadProduct$ = createEffect(
      () => {return this.actions$.pipe(
        ofType(load),
        exhaustMap(() => this.service.findAll())
      ).pipe(
        map(products => (findAll({products : products})))
      )
    }
    )
}
