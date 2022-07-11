import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "src/login/models/User";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {RegisterService} from "../RegisterService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm= {} as FormGroup;
  formSubmitted=false;
  user={} as User;
  selectedFile: File;
  retrieveResonse: any;
  message: string='';
  imageName: string='';
  pictureUploaded:boolean=false


  @Output()
  public userExporter:EventEmitter<User>=new EventEmitter<User>();

  constructor(private httpClient: HttpClient,private messageService: MessageService,private formBuilder: FormBuilder,private fb: FormBuilder, private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      firstName:new FormControl('', Validators.required),
      lastName:new FormControl('', Validators.required),
      username:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required),
    });
  }

  siteKey:string="6LeKAy4cAAAAANv4Q0NyiKy5hWuUmzTa4BjBmtpE";

  errormsg: string="";

  register() {
    if (this.userForm.controls['lastName'].value && this.userForm.controls['firstName'].value && this.userForm.controls['username'].value && this.userForm.controls['password'].value && this.pictureUploaded) {
    this.formSubmitted=true;
    this.registerService.register(this.userForm.controls['firstName'].value,this.userForm.controls['lastName'].value,this.userForm.controls['username'].value, this.userForm.controls['password'].value).subscribe((user)=>{
      this.user=user;

      sessionStorage.setItem('firstName', user.firstName);
      sessionStorage.setItem('lastName', user.lastName);
      sessionStorage.setItem('username', user.username);
      sessionStorage.setItem('password', user.password);
      sessionStorage.setItem('token', user.token);

      this.router.navigate(['home']);
    });
    }
    if(!this.pictureUploaded)
      this.messageService.add({severity:'error', summary:'Profile picture missing', detail:'Please upload a profile picture!'});
    else {
      this.messageService.add({severity:'error', summary:'Please complete all fields', detail:'ok'});
    }

  }

  onSubmit() {
    this.register();
  }

  handleClick() {
    this.router.navigate(['login']);
  }


  public onFileChanged(event: { target: { files: File[]; }; }) {
    //Select File
    this.messageService.add({severity:'success', summary:'Image chosen. Ready to upload', detail:'Click the Upload File button.'});
    this.selectedFile = event.target.files[0];
  }


  onUpload() {
    this.pictureUploaded=true;

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.userForm.controls['username'].value);

    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:4201/upload', uploadImageData, { observe: 'response' }).subscribe((response) => {

        //console.log("ok:"+String(response.status));
          if (response.status === 200 || response.status ===406) {
            this.message = 'Image uploaded successfully';
            this.messageService.add({severity:'success', summary:'Image uploaded successfully', detail:'ok1'});
          } else {
            this.message = 'Image not uploaded successfully';
            this.messageService.add({severity:'success', summary:'Image not uploaded successfully', detail:'ok2'});
          }
        }
      );
  }

}
