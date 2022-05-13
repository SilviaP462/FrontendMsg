import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import {LogoutModule} from "../logout/logout.module";
import {AppTranslateModule} from "../translate/translate.module";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";
import {LoginGuard} from "./components/guards/LoginGuard";
import {HomeGuard} from "./components/guards/HomeGuard";
import {RegisterGuard} from "./components/guards/RegisterGuard";
import {ChipModule} from "primeng/chip";
import {ItemsGuard} from "./components/guards/ItemsGuard";
import {ProductsGuard} from "./components/guards/ProductsGuard";


@NgModule({
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ],
    imports: [
        CommonModule,
        LogoutModule,
        TranslateModule,
        AppTranslateModule,
        ChipModule,
        RouterModule
    ],
  providers:[
    LoginGuard,
    HomeGuard,
    RegisterGuard,
    ItemsGuard,
    ProductsGuard
  ]
})
export class NavigationModule { }
