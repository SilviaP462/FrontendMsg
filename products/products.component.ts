import {Component, OnInit} from "@angular/core";
import {Item} from "./models/item";
import {Subscription} from "rxjs";
import {ItemService} from "./item.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: []
})
export class ProductsComponent implements OnInit {
  items:Item[]=[]
  item:Item={} as Item;
  itemsDialog: boolean = false;
  submitted: boolean = false;
  statuses: any[];
  editing: boolean = false;
  subscription: Subscription = new Subscription();
  paramId: number=-1;
  cols: any[];
  exportColumns: any[];
  selectedItems:Item[];

  constructor(private itemService:ItemService,private messageService: MessageService, private confirmationService: ConfirmationService,private router: Router) { }

  ngOnInit(): void {

    this.getItems();

    this.statuses = [
      {label: 'OLD', value: 'OLD'},
      {label: 'NEW', value: 'NEW'},
      {label: 'USED', value: 'USED'}
    ]

    this.cols = [
      { field: 'name', header: 'Name', customExportHeader: 'Name' },
      { field: 'description', header: 'Description' },
      { field: 'status', header: 'Status' }
    ];

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
    console.log(product.idItem);

    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',


      accept: () => {
        this.itemService.deleteItem(product.idItem).subscribe(res=>{});
        this.items = this.items.filter(val => val.idItem !== product.idItem);
        //this.itemService.deleteItem(this.item.id);
        // @ts-ignore
        product = {};
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});


      }
    });




  }

  saveItem(){
    this.submitted = true;

    console.log(this.item);


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

  exportPdf() {
    import("jspdf").then(jsPDF => {
      import("jspdf-autotable").then(x => {
        // @ts-ignore
        const doc = new jsPDF.default(0,0);
        (doc as any).autoTable(this.exportColumns, this.items);
        doc.save('products.pdf');
      })
    })
  }

 /* exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.items);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      saveAsExcelFile(excelBuffer, "products");
    });
  }*/

}
