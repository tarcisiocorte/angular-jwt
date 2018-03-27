import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatButtonModule, MatToolbarModule, MatInputModule} from '@angular/material';
import { FormsModule } from "@angular/forms";
import {MatCardModule} from '@angular/material/card';


import { AppComponent } from './app.component';
import { ApiService } from "./api.services";
import { AuthService } from "./auth.service";
import { MessagesComponent } from "./messages.components";
import { RegisterComponent } from './register.components';
import { LoginComponent } from './login.component';


const routes = [
  {path: 'register', component: RegisterComponent },  
  {path: 'login', component: LoginComponent }  
]


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
