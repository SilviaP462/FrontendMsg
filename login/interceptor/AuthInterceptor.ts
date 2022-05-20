import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.url!=="http://localhost:4201/login" && req.url!== "http://localhost:4201/register" && req.url!== "http://localhost:4201/upload" &&req.url.substr(0, 'http://localhost:4201/get/'.length)!=="http://localhost:4201/get/" &&
      req.url.substr(0, 'http://localhost:4201/items/'.length)!=="http://localhost:4201/items/") {

      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, content-type'
        },
      });
    }

    return next.handle(req);
  }
}

