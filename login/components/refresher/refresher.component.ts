import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {RegisterService} from "../../../register/RegisterService";

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.component.html',
  styleUrls: ['./refresher.component.scss']
})
export class RefresherComponent implements OnInit {

  constructor(private loginService: LoginService, private registerService:RegisterService) {
    //let intervalId = setInterval(this.refreshForLogin, 5000, loginService);
  }

  ngOnInit(): void {
  }


  refreshForLogin(service: LoginService){
    if(sessionStorage.getItem('username')!==null){
      service.login(sessionStorage.getItem('username')!, sessionStorage.getItem('password')!).subscribe(
        data=>{
          sessionStorage.setItem('token', data.token);
        }
      )
    }

  }


}
