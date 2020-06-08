import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-valuebooks',
  templateUrl: './valuebooks.component.html',
  styleUrls: ['./valuebooks.component.css'],
})
export class ValuebooksComponent implements OnInit {
  books: any;
  title = 'fgf';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getvalues();
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
