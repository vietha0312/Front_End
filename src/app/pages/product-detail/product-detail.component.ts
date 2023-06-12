import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/Services/Product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  productSlug: string | null = '';
  product: IProduct = {
    _id: '',
    name: '',
    price: 0,
    image: '',

  };
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productSlug = this.route.snapshot.paramMap.get('slug');
    console.log(this.productSlug);
    this.productService.getProductById(this.productSlug).subscribe((data) => {
      console.log(data);
      this.product = data;
    });
  }

}