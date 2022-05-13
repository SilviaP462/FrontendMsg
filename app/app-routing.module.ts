import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

import {LoginComponent} from "../login/components/login/login.component";
import {HomeGuard} from "../navigation/components/guards/HomeGuard";
import {LoginGuard} from "../navigation/components/guards/LoginGuard";
import {ItemsGuard} from "../navigation/components/guards/ItemsGuard";
import {ProductsGuard} from "../navigation/components/guards/ProductsGuard";
import {RegisterComponent} from "../register/components/register.component";
import {RegisterGuard} from "../navigation/components/guards/RegisterGuard";



const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
    canActivate: [HomeGuard]
  },
  {
    path: 'home',
    /*pathMatch:'full',*/
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
    canActivate: [HomeGuard]
  },
  {
    path: 'items',
    /*pathMatch:'full',*/
    loadChildren: () => import('../item/items.module').then(m => m.ItemsModule),
    canActivate: [ItemsGuard]
  },
  {
    path: 'products',
    /*pathMatch:'full',*/
    loadChildren: () => import('../products/products.module').then(m => m.ProductsModule),
    canActivate: [ProductsGuard]

  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [RegisterGuard]

  },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]

  }/*,

  {path:'**', component: Error404Component}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
