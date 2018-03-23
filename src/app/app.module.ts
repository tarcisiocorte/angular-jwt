import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';



import { AppComponent } from './app.component';
import { ApiService } from "./api.services";
import { MessagesComponent } from "./messages.components";


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonModule,
    MatCardModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
