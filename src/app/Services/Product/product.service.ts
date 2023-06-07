import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { IProduct, IResponse } from 'src/app/interfaces/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  private API_Url = `http://localhost:8080/api`;


  getProducts(): Observable<IResponse> {
    return this.http.get<IResponse>(`${this.API_Url}/products`)
  }
  getProductById(_id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_Url}/products/${_id}`)
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API_Url}/products`, product)
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.API_Url}/products/${product._id}`, product)
  }
  deleteProduct(_id: string): Observable<IResponse> {
    return this.http.delete<IResponse>(`${this.API_Url}/products/${_id}`)
  }
  relatedProducts(categoryId: number): Observable<any> {
    return this.http.get<any>(`${this.API_Url}/categories/${categoryId}?_embed=products`)
  }
}