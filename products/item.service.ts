import {Injectable} from "@angular/core";
import {BackendService} from "../backend/backend.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "./models/item";


@Injectable({
  providedIn:'root'
})

export class ItemService{

  constructor(private backendService: BackendService, private httpClient:HttpClient) { }

  addItem(data:Item):Observable<Item>{
    let token='Bearer '+ sessionStorage.getItem('token')!;
    let options={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token, content-type'
      })
    };
    return this.httpClient.post<Item>("http://localhost:4201/items/add", data, options);

  }

  getItems(){
    return this.backendService.get("http://localhost:4201/items/getAll");
  }

  updateItem(data: Item): Observable<Item>{
    return this.httpClient.post<Item>("http://localhost:4201/items/update/", data);
  }

  deleteItem(id: number){
    let token='Bearer '+ sessionStorage.getItem('token')!;
    let options={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'DELETE',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token, content-type'
      })
    };
    console.log("http://localhost:4201/items/delete/"+id);
    return this.httpClient.delete<Item>("http://localhost:4201/items/delete/"+id, options);
  }

}
