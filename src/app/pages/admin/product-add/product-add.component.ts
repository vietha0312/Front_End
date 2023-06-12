import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/Services/Product/product.service';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { ICategory } from 'src/app/interfaces/Category';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

   
        categories: ICategory[] = [];
      
        productForm = this.formBuilder.group({
          name: ['', [Validators.required, Validators.minLength(4)]],
          price: [0, [Validators.required]],
          image: ['', [Validators.required]],
          category: ['', [Validators.required]]
        });
      
        constructor(
          private formBuilder: FormBuilder,
          private productService: ProductService,
          private categoryService: CategoryService,
          private router: Router
        ) {}
      
        ngOnInit() {
          this.getCategories();
        }
      
        getCategories(): void {
          this.categoryService.getCategories()
            .subscribe(
              categories => {
                this.categories = categories;
              },
              error => {
                console.log(error);
              }
            );
        }
      
        onHandleSubmit() {
          if (this.productForm.invalid) {
            return;
          }
      
          const product: IProduct = {
            name: this.productForm.value.name || '',
            price: this.productForm.value.price || 0,
            image: this.productForm.value.image || '',
            category: this.productForm.value.category || ''
          };
      
          this.productService.addProduct(product).subscribe(data => {
            this.router.navigate(['/admin/product']);
          });
        }
      }