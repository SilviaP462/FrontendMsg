import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HomeRoutingModule} from "../home/home-routing.module";
import {TranslateModule} from "@ngx-translate/core";
import {AvatarModule} from "primeng/avatar";
import {ImageModule} from "primeng/image";
import {ItemsListComponent} from "./components/items-list/items-list.component";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {DropdownModule} from "primeng/dropdown";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {ToolbarModule} from "primeng/toolbar";
import {ToastModule} from "primeng/toast";
import {FormsModule} from "@angular/forms";
import {ItemsRoutingModule} from "./items-routing.module";

@NgModule({
  declarations: [
    ItemsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    TranslateModule,
    AvatarModule,
    ImageModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    ConfirmDialogModule,
    TableModule,
    DialogModule,
    ToolbarModule,
    ToastModule,
    FormsModule,
    ItemsRoutingModule
  ],
  exports:[
    ItemsListComponent
  ]
})
export class ItemsModule { }
