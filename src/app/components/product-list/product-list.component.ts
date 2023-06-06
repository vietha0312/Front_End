import { Component } from '@angular/core';
import { ProductService } from 'src/app/Services/Product/product.service';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: IProduct[] = [];
  // constructor(private productService: ProductService) {
  //   this.productService.getProducts().subscribe(data => {
  //     this.products = data;
  //   }, error => console.log(error.message))
  // }
  constructor(private productService: ProductService) {

    this.productService.getProducts().subscribe(data => {
      this.products = data.products;
      console.log(this.products)
    });

  }
  removeItem(id: any) {
    // xoa API
    this.productService.deleteProduct(id).subscribe(() => {
      // reRender
      this.products = this.products.filter(item => item._id !== id)
    })
    // this.onRemove.emit(id);
  }
}
