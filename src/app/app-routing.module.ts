import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AdminComponent } from './layout/admin/admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductAddComponent } from './pages/admin/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/admin/product-update/product-update.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';



const routes: Routes = [

  {
    path: "admin", component: AdminComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full", },
      { path: "dashboard", component: DashboardComponent },
      { path: "product", component: ProductListComponent },
      { path: "product/add", component: ProductAddComponent },
      { path: "product/:id/update", component: ProductUpdateComponent },
    ]
  },
  { path: "**", component: PageNotFoundComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
