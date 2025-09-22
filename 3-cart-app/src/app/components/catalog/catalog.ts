import { Component, Input, OnInit} from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../product-card/product-card';
import { SharingData } from '../../services/sharing-data';
import { Router } from '@angular/router';
import { ProductService } from '../../services/productService';

@Component({
  selector: 'catalog',
  imports: [ProductCard],
  templateUrl: './catalog.html',
})
export class Catalog implements OnInit {

    @Input() products!: Product[];

    constructor(
      private SharingService: SharingData,
      private router: Router,
      private productService: ProductService)

      {

      if(this.router.currentNavigation()?.extras.state!){

        this.products = this.router.currentNavigation()?.extras.state!['products']

      }

  }
  ngOnInit(): void {
    if (!this.products){
      this.products = this.productService.findAll();
    }
  }

    onClickAddCart(product: Product) {
      this.SharingService.ProductEventEmitter.emit(product)
    }
}
