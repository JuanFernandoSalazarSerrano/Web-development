import { Component, Input} from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../product-card/product-card';
import { SharingData } from '../../services/sharing-data';
import { Router } from '@angular/router';

@Component({
  selector: 'catalog',
  imports: [ProductCard],
  templateUrl: './catalog.html',
})
export class Catalog {

    @Input() products!: Product[];

    constructor(private SharingService: SharingData, private router: Router){
      this.products = this.router.currentNavigation()?.extras.state!['products']
  }

    onClickAddCart(product: Product) {
      this.SharingService.ProductEventEmitter.emit(product)
    }
}
