import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BackendModule} from "../backend/backend.module";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {TranslateModule} from "@ngx-translate/core";
import {ToastModule} from "primeng/toast";
import {NgxCaptchaModule} from "ngx-captcha";


@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BackendModule,
        HttpClientModule,
        PasswordModule,
        ButtonModule,
        InputTextModule,
        TranslateModule,
        ToastModule,
        NgxCaptchaModule
    ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
