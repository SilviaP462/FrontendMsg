import {NgModule} from "@angular/core";
import {ProductsComponent} from "./products.component";
import {ProductsRoutingModule} from "../products-routing.module";
import {ToolbarModule} from "primeng/toolbar";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {DropdownModule} from "primeng/dropdown";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {ToastModule} from "primeng/toast";
import {FormsModule} from "@angular/forms";
import {ConfirmationService} from "primeng/api";
import {TooltipModule} from "primeng/tooltip";
import {TranslateModule} from "@ngx-translate/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    ProductsComponent
  ],
    imports: [
        ProductsRoutingModule,
        ToolbarModule,
        RippleModule,
        TableModule,
        ButtonModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        ConfirmDialogModule,
        DialogModule,
        ToastModule,
        FormsModule,
        TooltipModule,
        TranslateModule
    ],
  exports:[
    ProductsComponent
  ],
  providers:[ConfirmationService]
})
export class ProductsModule { }
