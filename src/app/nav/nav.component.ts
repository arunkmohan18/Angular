import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'protractor';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   model: any = {};

  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
  }


  login(){
    this.authservice.login(this.model).subscribe(x => {
      console.log("Login Successfully");},
      error => {
        console.log("login failed");
      });
  }
  loggedin(){
    const token=localStorage.getItem("token");
    return !!token;
  }
  loggout(){
    localStorage.removeItem("token");
    console.log("Log out Successfuly");
  }
}
