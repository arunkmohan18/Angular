import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { ValuebooksComponent } from './valuebooks/valuebooks.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { approutes } from './routes';
import { ReviewsComponent } from './reviews/reviews.component';
import { AuthorsComponent } from './authors/authors.component';



@NgModule({
  declarations: [
    AppComponent,
    ValuebooksComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ReviewsComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(approutes)
  ],
  providers: [
ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
