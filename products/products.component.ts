import {Component, OnInit} from "@angular/core";
import {Item} from "./models/item";
import {Subscription} from "rxjs";
import {ItemService} from "./item.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  items:Item[]=[]
  item:Item={} as Item;
  itemsDialog: boolean = false;
  viewItemsDialog: boolean = false;
  submitted: boolean = false;
  statuses: any[];
  editing: boolean = false;
  subscription: Subscription = new Subscription();
  cols: any[];
  exportColumns: any[];
  selectedItems:Item[];

  constructor(private itemService:ItemService,private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

    this.getItems();

    this.statuses = [
      {label: 'OLD', value: 'OLD'},
      {label: 'NEW', value: 'NEW'},
      {label: 'USED', value: 'USED'}
    ]

    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }

  getItems() {
    this.subscription.add(
      this.itemService.getItems().subscribe((i) => {
        this.items = i;
      }));
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
    //console.log(product.idItem);

    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',

      accept: () => {
        this.itemService.deleteItem(product.idItem).subscribe(res=>{});
        this.items = this.items.filter(val => val.idItem !== product.idItem);
        // @ts-ignore
        product = {};
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});

      }
    });
  }

  saveItem(){
    this.submitted = true;

    //console.log(this.item);


    if (this.item.name.trim() && this.item.description.trim()) {
      if (this.editing) {
        this.itemService.updateItem(this.item).subscribe(res=>{
          this.getItems();
          this.itemsDialog = false;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Item Updated', life: 3000});

        })
      } else {
        this.itemService.addItem(this.item).subscribe(res => {
         this.getItems();
          this.itemsDialog = false;
          this.item = {} as Item;
          this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Item Created', life: 3000});

        })
      }
    }
    this.editing = false;
  }


  editProduct(product: Item) {

    this.item= {...product};
    this.itemsDialog = true;

  }

  viewProduct(product: Item) {

    this.item= {...product};
    this.viewItemsDialog = true;

  }

  hideViewDialog(){
    this.viewItemsDialog = false;
  }

  exportPdf() {
    import("jspdf").then(jsPDF => {
      import("jspdf-autotable").then(x => {
        // @ts-ignore
        const doc = new jsPDF.default(0,0);
        (doc as any).autoTable(this.exportColumns, this.selectedItems);
        doc.save('products.pdf');
      })
    })
  }

}
