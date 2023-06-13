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
export class ProductEditComponent implements OnInit {
  product: IProduct = {
    _id: '',
    name: '',
    price: 0,
    image: '',
    categoryId:''
  };

  productForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      image: ['']
    });
  }
  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    console.log(productId);
    if (productId) {
      this.productService.getProductById(productId).subscribe((product: IProduct) => {
        this.product = product;
        this.productForm.setValue({
          name: product.name,
          price: product.price,
          image: product.image,
          
        });
      });
    }
  }

  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }
  
    const updatedProduct: IProduct = {
      _id: this.product._id,
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      image: this.productForm.value.image
    };
  
    this.productService.updateProduct(updatedProduct).subscribe(
      () => {
        alert('Cập nhật thành công')
        this.router.navigate(['/admin/product']);
      },
      (error) => {
        console.error(error);
        
      }
    );
  }
}
