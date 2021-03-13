import { Component, OnInit } from '@angular/core';
import { Category } from '../categoy';
import { MenuService } from '../menu.service';
import { Product } from '../product';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categories: Category[];
  products: Product[];
  constructor(
    private menuService: MenuService,
    ) {
    this.categories = [];
    this.products = [];
   }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  public getCategories(): void {
    this.menuService.getCategories()
    .subscribe(categories => this.categories = categories);
  }

  public getProducts(): void {
    this.menuService.getProducts()
    .subscribe(products => this.products = products);
  }

}
