import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books: any;
  registermode = false;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getvalues();
  }

  registerToggle() {
    this.registermode = !this.registermode;

  }
  cancelregistermode(registerm:boolean){
    this.registermode = registerm;
  }
  getvalues() {
    this.http.get('http://localhost:5001/books').subscribe(
      (Response) => {
        this.books = Response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
