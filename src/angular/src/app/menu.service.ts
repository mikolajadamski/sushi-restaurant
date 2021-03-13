import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './categoy';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private categoryUrl: string = 'http://localhost:8080/api/categories'
  private productUrl: string = 'http://localhost:8080/api/products'


  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(){
    this.getCategories();
    this.getProducts();
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }
}
