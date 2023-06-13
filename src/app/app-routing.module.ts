import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AdminComponent } from './layout/admin/admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductEditComponent } from './pages/admin/product-update/product-update.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserComponent } from './layout/user/user.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { SigninComponent } from './pages/signin/signin.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {
    path: "", component: UserComponent, children: [
      { path: "", component: HomePageComponent },
      { path: "product", component: ProductPageComponent },
      { path: "product/:id", component: ProductDetailComponent }
    ]
  },
  { path: "signup", component: SignUpComponent },
  { path: "signin", component: SigninComponent },

  {
    path: "admin", component: AdminComponent,canActivate:[AuthGuard], children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full", },
      { path: "dashboard", component: DashboardComponent },
      { path: "product", component: ProductListComponent },
      { path: "product/add", component: ProductAddComponent },
      { path: "product/:id/update", component: ProductEditComponent },
    ]
  },
  { path: "**", component: PageNotFoundComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
