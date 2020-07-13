import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'protractor';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   model: any = {};

  constructor(public authservice: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }


  login(){
    this.authservice.login(this.model).subscribe(x => {
     this.alertify.success("Login Successfully");},
      error => {
        this.alertify.error(error);
      });
  }
  loggedin(){
    return this.authservice.loggedin();
  }
  loggout(){

    localStorage.removeItem("token");
    this.alertify.success("Log out Successfuly");
  }
}
