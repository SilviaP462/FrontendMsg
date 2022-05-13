import { Component, OnInit } from '@angular/core';
import {Item} from "../../../products/models/item";
import {ConfirmationService, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {ItemService} from "../../../products/item.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items:Item[]=[]
  item:Item={} as Item;
  itemsDialog: boolean = false;
  submitted: boolean = false;
  statuses: any[];
  editing: boolean = false;
  subscription: Subscription = new Subscription();
  paramId: number=-1;

  constructor(private itemService:ItemService,private messageService: MessageService, private confirmationService: ConfirmationService,private router: Router) { }

  ngOnInit(): void {
    this.statuses = [
      {label: 'OLD', value: 'OLD'},
      {label: 'NEW', value: 'NEW'},
      {label: 'USED', value: 'USED'}
    ]
  }

  openNew() {
    this.item = {} as Item;
    this.submitted = false;
    this.itemsDialog = true;
  }

  hideDialog() {
    this.itemsDialog = false;
    this.submitted = false;
  }

  deleteItem(product: Item) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.items = this.items.filter(val => val.idItem !== this.item.idItem);
        // @ts-ignore
        this.item = {};
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
    });
  }

  saveItem(){
    this.submitted = true;


    if (this.item.name.trim() && this.item.description.trim()) {
      if (this.editing) {
        this.itemService.updateItem(this.item).subscribe(res=>{
          //this.generateItems();
          this.itemsDialog = false;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Updated', life: 3000});
          /*if(this.paramId>-1){
            this.router.navigate(['items']);
          }*/
        })
      } else {
        this.itemService.addItem(this.item).subscribe(res => {
          //this.generateItems();
          this.itemsDialog = false;
          this.item = {} as Item;
          this.messageService.add({severity: 'success', summary: 'Successful', detail: 'User Created', life: 3000});
          /*if(this.paramId>-1){
            this.router.navigate(['items']);
          }*/
        })
      }
    }
    this.editing = false;
  }

  /*generateItems() {
    this.subscription.add(
      this.itemService.getItems().subscribe( (users) => {
        this.items = items;
        this.route.params.subscribe(params=>{
          this.paramId=params['id']
          if(this.paramId>0){
            this.editItem(this.findUserById(this.paramId))
          }
        })
      }));
  }

  findUserById(id: number):Item{
    for(let i=0; i<this.items.length;++i){
      if(this.items[i].id==id){
        return this.items[i] as Item;

      }
    }
    return {} as Item;
  }*/

}
