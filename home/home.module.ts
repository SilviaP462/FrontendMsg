import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import {RouterModule} from "@angular/router";
import {HomeRoutingModule} from "./home-routing.module";
import {TranslateModule} from "@ngx-translate/core";
import {AvatarModule} from "primeng/avatar";
import {ImageModule} from "primeng/image";



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    TranslateModule,
    AvatarModule,
    ImageModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class HomeModule { }

