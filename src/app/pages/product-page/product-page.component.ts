import { Component } from '@angular/core';
import { ProductService } from 'src/app/Services/Product/product.service';
import { IProduct } from 'src/app/interfaces/Product';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  title = 'Products Page';
  products: IProduct[] = [];

  constructor(private productService: ProductService) {

    this.productService.getProducts().subscribe(data => {
      this.products = data.products;
      console.log(this.products)
    });

  }
}
