import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErroComponent } from './erro/erro.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogComponent } from './blog/blog.component';
import { ShopComponent } from './shop/shop.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { CompareComponent } from './compare/compare.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    ErroComponent,
    ContactUsComponent,
    BlogComponent,
    ShopComponent,
    MyAccountComponent,
    CheckoutComponent,
    CartComponent,
    CompareComponent,
    OrderTrackingComponent,
    WishlistComponent,
    LoginRegisterComponent,
    HomeComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
