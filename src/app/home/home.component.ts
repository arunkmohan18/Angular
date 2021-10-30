import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public homeh1="Find book";
  public homeh2="Lets explore to new world... All you need to do is sign up!";
  public count1=0;
  public str1="";
  public str2="";
  books: any;
  public cnumber=0;
  registermode = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getvalues();

  }
clickhello()
{
   this.str1="you clicked me "+this.count1+" Times ";
   this.count1+=1;
}
  registerToggle() {
    this.registermode = !this.registermode;

  }
  cancelregistermode(registerm:boolean){
    this.registermode = registerm;
  }
  oddoreven(){
    this.str2= this.cnumber.toString();
    if (this.cnumber % 2==0)
    {
      this.str2+= " is even";
    }
    else
    {
  this.str2+= " is odd";
    }
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
