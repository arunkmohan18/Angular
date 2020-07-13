import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwthelper = new JwtHelperService();
  baseurl = 'http://localhost:5001/auth/';

  decodedtoken:any
  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(this.baseurl + 'Login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedtoken=this.jwthelper.decodeToken(user.token);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.baseurl + 'register', model);
  }

  loggedin() {
    const token=localStorage.getItem('token');
    return !this.jwthelper.isTokenExpired(token);
  }
}
