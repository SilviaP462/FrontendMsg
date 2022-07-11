import {Injectable} from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {BackendService} from "../../backend/backend.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private backendService: BackendService) { }

  login(username: string, password: string){
    let params=new HttpParams().set('user', username).set('password', password);
    return this.backendService.post('http://localhost:4201/login', params);
  }

}
