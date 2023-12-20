import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://dummyjson.com'

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(`${this.baseUrl}/products`).pipe(
      map((res) => {
        return res
      })
    )
  }
  getProductById(id: String) {
    return this.http.get(`${this.baseUrl}/products/${id}`).pipe(
      map((res) => {
        return res
      })
    )
  }
}
