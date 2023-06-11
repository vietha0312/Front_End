import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/Services/Product/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html',
    styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {

    productForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        price: [0, [Validators.required]],
        image: ['', [Validators.required]]


    })
    constructor(private formBuilder: FormBuilder,
        private productService: ProductService,
        private router: Router) {

    }
    onHandleSubmit() {
        if (this.productForm.invalid) {
            return;
        }

        const product: IProduct = {
            name: this.productForm.value.name || '',
            price: this.productForm.value.price || 0,
            image: this.productForm.value.image || '',
        }
        this.productService.addProduct(product).subscribe(data => {
            this.router.navigate(['/admin/product']);
        })
    }
}