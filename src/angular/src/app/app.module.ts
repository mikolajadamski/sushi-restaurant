import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { MenuComponent } from './menu/menu.component';
import { MatchesCategoryPipe } from './matchesCategory';

@NgModule({
  declarations: [
    AppComponent,
    NavbarItemComponent,
    MenuComponent,
    MatchesCategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
