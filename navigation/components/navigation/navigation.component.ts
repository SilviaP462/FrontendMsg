import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  statuses: any[];

  statusHome: any;
  statusExport:any;
  statusItem:any;
  statusProducts:any;


  constructor(private router: Router) {

    this.statusHome = {label: "home", value: false}

    this.statusItem={label: "items", value: false}

    this.statusProducts={label: "products", value: false}

    this.statuses = [this.statusHome,this.statusItem,this.statusProducts];
  }

  ngOnInit(): void {
  }



  changeStatuses(link: String) {
    for(var status of this.statuses) {
      status.value = link === status.label;
    }
  }

}

