import { Component ,OnInit} from '@angular/core';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { ProductService } from 'src/app/Services/Product/product.service';
import { ICategory } from 'src/app/interfaces/Category';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent  {
  title = 'Products Page';
  
  products: IProduct[] = [];


  constructor(private productService: ProductService,
   ) {

    this.productService.getProducts().subscribe(data => {
      this.products = data.products;
      console.log(this.products)
    });

  }
}
