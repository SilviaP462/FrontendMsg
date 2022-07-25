import {Injectable} from "@angular/core";
import {BackendService} from "../backend/backend.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "./models/item";


@Injectable({
  providedIn: 'root'
})

export class ItemService {

  constructor(private backendService: BackendService, private httpClient: HttpClient) {
  }

  addItem(data: Item): Observable<Item> {
    return this.httpClient.post<Item>("http://localhost:4201/items/add", data);
  }

  getItems() {
    return this.backendService.get("http://localhost:4201/items/getAll");
  }

  updateItem(data: Item): Observable<Item> {
    return this.httpClient.post<Item>("http://localhost:4201/items/update/", data);
  }

  deleteItem(id: number) {
    return this.httpClient.delete<Item>("http://localhost:4201/items/ok/" + id);
  }

}
