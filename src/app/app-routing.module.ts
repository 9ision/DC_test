import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { CompareComponent } from './pages/compare/compare.component';
import { OrderTrackingComponent } from './pages/order-tracking/order-tracking.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { Page404Component } from './pages/page404/page404.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Shop', component: ShopComponent},
  {path: 'MyAccount', component: MyAccountComponent},
  {path: 'Checkout', component: CheckoutComponent},
  {path: 'Cart', component: CartComponent},
  {path: 'Compare', component: CompareComponent},
  {path: 'OrderTracking', component: OrderTrackingComponent},
  {path: 'Wishlist', component: WishlistComponent},
  {path: '404', component: Page404Component},
  {path: 'Blog', component: BlogComponent},
  {path: 'ContactUs', component: ContactUsComponent},
  {path: 'LoginRegister', component: LoginRegisterComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
