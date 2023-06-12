import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Services/Product/product.service';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductEditComponent {
  product: IProduct = {
    name: "",
    price: 0,
    image: ""
  }
  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
    image: ['']
  })
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {
    const _id = this.route.snapshot.paramMap.get('_id');
    this.productService.getProductById(_id).subscribe((product: IProduct) => {
      this.product = product;
      this.productForm.setValue({
        name: product.name,
        image: product.image ?? null,
        price: product.price
      });
    })
  }

  onSubmit() {
    if (this.productForm.invalid) return;

    const product: IProduct = {
      _id: this.product._id,
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
      image: this.productForm.value.image || '',
    }

    this.productService.updateProduct(product).subscribe(data => {
      this.router.navigate(['/admin/product']);
    })
  }
}