import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ItemsListComponent} from "./components/items-list/items-list.component";

const routes: Routes = [
  {
    path: '',
    component: ItemsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
