import {Component, LOCALE_ID, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'title';
  status: any;


  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }


  ngOnInit(): void {

  }

  checkIfLoggedIn() {
    return sessionStorage.getItem("username") !== null;
  }


}


