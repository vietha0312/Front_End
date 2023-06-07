import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UserComponent } from './layout/user/user.component';
import { AdminComponent } from './layout/admin/admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/admin/product-update/product-update.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    UserComponent,
    AdminComponent,
    PageNotFoundComponent,
    AdminProductComponent,
    ProductPageComponent,
    ProductDetailComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    DashboardComponent,
    SignUpComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
