import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { CartminiComponent } from './cart/cartmini/cartmini.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './products/product/product.component';
import { ProductsService } from './services/products.service';
import { CartComponent } from './cart/cart.component';
import { NumberInputComponent } from './shared/number-input/number-input.component';
import { ProductsDataBaseService } from './services/products-data-base.service';



const appRoutes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'cart', component: CartComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductCardComponent,
    CartminiComponent,
    ProductComponent,
    CartComponent,
    NumberInputComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ProductsDataBaseService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
