import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { NavbarItem } from './navbarItem'

@Injectable({
  providedIn: 'root'
})
export class NavbarItemService {
  private navbarItemsUrl = 'http://localhost:8080/api/navbar_items';

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(){
    this.getNavbarItems();
  }

  getNavbarItems(): Observable<NavbarItem[]> {
    return this.http.get<NavbarItem[]>(this.navbarItemsUrl)
  }
}
