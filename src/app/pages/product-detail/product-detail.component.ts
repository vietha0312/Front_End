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
  product : IProduct = {
    name: "",
    price: 0
  }
  category: any = {}
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  )
  {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product
      })
    })
  }
  ngOnInit(){
    this.getCategory();
  }
  getCategory() {
    this.productService.relatedProducts(1).subscribe(data => {
      this.category = data
    })
  }
}
