import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};
  constructor(private authservice: AuthService, private alertify: AlertifyService) {}

  ngOnInit(): void {
  }

  register() {
    this.authservice.register(this.model).subscribe(() => {
      this.alertify.success("Registration Successfull");
    }, error => {
      this.alertify.error(error);
    });
  }
  cancel() {
    this.cancelRegister.emit(false);
    this.alertify.message('Cancelled');
  }
}
