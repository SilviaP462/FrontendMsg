import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../login/components/login/login.component";
import {HomeGuard} from "../navigation/components/guards/HomeGuard";
import {LoginGuard} from "../navigation/components/guards/LoginGuard";
import {RegisterComponent} from "../register/components/register.component";
import {Error404Component} from "../error404/error404-component";


const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('../login/login.module').then(m => m.LoginModule),
    canActivate: [HomeGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
    canActivate: [HomeGuard]
  },
  {
    path: 'products',
    loadChildren: () => import('../products/component/products.module').then(m => m.ProductsModule),
    canActivate: [HomeGuard]

  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginGuard]

  },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]

  },
  {path:'**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
