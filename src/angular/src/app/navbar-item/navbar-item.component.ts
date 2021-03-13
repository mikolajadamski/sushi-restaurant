import { Component, OnInit } from '@angular/core';
import { NavbarItemService } from '../navbar-item.service';
import { NavbarItem } from '../navbarItem';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss']
})
export class NavbarItemComponent implements OnInit {

  navbarItems: NavbarItem[];
  constructor(
    private navbarItemService: NavbarItemService
  ) {
    this.navbarItems = [];
   }

  ngOnInit(): void {
    this.getNavbarItems();
  }

  getNavbarItems(): void {
    this.navbarItemService.getNavbarItems()
    .subscribe(navbarItems => this.navbarItems = navbarItems);
  }

}
