import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { ProductService } from 'src/app/Services/Product/product.service';
import { ICategory } from 'src/app/interfaces/Category';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  categories: ICategory[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
    this.getProducts();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      categories => {
        this.categories = categories;
      },
      error => {
        console.log(error);
      }
    );
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      data => {
        this.products = data.products;
        console.log(this.products);
      },
      error => {
        console.log(error);
      }
    );
  }

  removeItem(productId: any) {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa sản phẩm này?');
    if (confirmDelete) {
      this.productService.deleteProduct(productId).subscribe(() => {
        this.products = this.products.filter(item => item._id !== productId);
      });
    }
  }
}
