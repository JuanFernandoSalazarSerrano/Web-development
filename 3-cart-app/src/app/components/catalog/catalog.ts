import { Component, Input, OnInit} from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../product-card/product-card';
import { SharingData } from '../../services/sharing-data';
import { Router } from '@angular/router';
import { ProductService } from '../../services/productService';
import { Store } from '@ngrx/store';
import { load } from '../../store/products.action';
import { ProductsState } from '../../store/products.reducer';

@Component({
  selector: 'catalog',
  imports: [ProductCard],
  templateUrl: './catalog.html',
})
export class Catalog implements OnInit {

    products!: Product[];

    constructor(
      private store: Store<{ products: ProductsState }>,
      private SharingService: SharingData,
      private router: Router,
      private productService: ProductService)

      {

        this.store.select(store => store.products).subscribe(state => {
          this.products = state.products
          console.log(state)
        })

  }

  ngOnInit(): void {
      this.store.dispatch({type: 'load'})
  }

    onClickAddCart(product: Product) {
      this.SharingService.ProductEventEmitter.emit(product)
    }
}


