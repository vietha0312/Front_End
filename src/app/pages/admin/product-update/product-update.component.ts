import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/Services/Product/product.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductEditComponent {
  product: IProduct = {
    name: "",
    price: 0,
    image:''
  }
  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
    image:['']
  })
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {

    // Observable
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('_id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
        this.productForm.patchValue({
          name: product.name,
          price: product.price,
          image:product.image
        })
      })
    })
  }
  onHandleSubmit() {
    if (this.productForm.invalid) return;

    const product: IProduct = {
     _id: this.product._id,
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
      image: this.productForm.value.image || ''
    }
    this.productService.updateProduct(product).subscribe(data => {
      console.log(data)
    })
  }
}
