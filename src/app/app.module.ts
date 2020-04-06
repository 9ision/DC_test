import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogComponent } from './blog/blog.component';
import { ShopComponent } from './shop/shop.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { CompareComponent } from './pages/compare/compare.component';
import { OrderTrackingComponent } from './pages/order-tracking/order-tracking.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './pages/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
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
