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
import { MessagesComponent } from "./messages.components";
import { RegisterComponent } from './register.components';

const routes = [
  {path: 'register', component: RegisterComponent }  
]


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent
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
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
