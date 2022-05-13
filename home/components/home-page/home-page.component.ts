import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getImage();
  }

  getUsername(){
    return sessionStorage.getItem('username');
  }


  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:4201/get/' + sessionStorage.getItem('username'))
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
}


