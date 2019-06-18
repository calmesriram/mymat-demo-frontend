import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { AlertComponent } from '../alert/alert.component'
import { NotificationService } from '../alert/toastr-notification.service'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private apiservice:ApiService,private _notificationservice:NotificationService) { }

  ngOnInit() {
  }

  login(form) {
    this.apiservice.APIlogin(form.value).then(res =>{
      if (res.status) {      
        if (res == true) {
          this._notificationservice.success("Login Success");
        } else {
          let message = res.error.non_field_errors == undefined ? "Login Failed" : "Login Failed, "+res.error.non_field_errors
          this._notificationservice.error(message);
        }
      } else {
        this._notificationservice.info("Check Internet");
      }
    })
   }

}
