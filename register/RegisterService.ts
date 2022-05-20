import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BackendService} from "src/backend/backend.service";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {



  constructor(private backendService: BackendService, private http: HttpClient) { }



  register(firstName:string, lastName:string,username: string, password: string){
    let params=new HttpParams().set('firstName',firstName).set('lastName',lastName).set('username', username).set('password', password);
    return this.backendService.post('http://localhost:4201/register', params);
  }

}
