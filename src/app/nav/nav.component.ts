import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'protractor';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   model: any = {};

  constructor(public authservice: AuthService, private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit(): void {
  }


  login(){
    this.authservice.login(this.model).subscribe(x => {
     this.alertify.success("Login Successfully");},
      error => {
        this.alertify.error(error);
      },() => {this.router.navigate(['/authors'])});
  }
  loggedin(){
    return this.authservice.loggedin();
  }
  loggout(){

    localStorage.removeItem("token");
    this.alertify.success("Log out Successfuly");
    this.router.navigate(['/home']);
  }
}
