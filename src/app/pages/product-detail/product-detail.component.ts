import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/Services/Product/product.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  productId: string | null = '';
  product: IProduct = {
    _id: '',
    name: '',
    price: 0,
    image: ''
  };
  message: string = ''; // Thêm biến message và khởi tạo giá trị ban đầu

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productId = this.route.snapshot.paramMap.get('id');
    console.log(this.productId);
    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe((data: IProduct) => {
        console.log(data);
        this.product = data;
        console.log(this.product)
     
        this.message = 'Lấy sản phẩm thành công';
      });
    } else {
      // Xử lý khi this.productId là null
      console.log('Không tìm thấy productId');
    }
  }
}