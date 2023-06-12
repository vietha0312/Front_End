import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ICategory } from 'src/app/interfaces/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_Url = `http://localhost:8080/api`;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<ICategory[]> {
    return this.http.get<{ message: string; categories: ICategory[] }>(`${this.API_Url}/categories`)
      .pipe(
        map(response => response.categories)
      );
  }
}