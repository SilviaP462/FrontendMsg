import {ItemStatus} from "./item-status";

export interface Item{

  idItem: number;
  name:String;
  description: String;
  status: ItemStatus;

}
