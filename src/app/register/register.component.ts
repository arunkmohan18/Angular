import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};
  constructor(private authservice: AuthService) {}

  ngOnInit(): void {
  }

  register() {
    this.authservice.register(this.model).subscribe(() => {
      console.log("Registration Successfull");
    }, error => {
      console.log(error);
    });
  }
  cancel() {
    this.cancelRegister.emit(false);
    console.log('Cancelled');
  }
}
