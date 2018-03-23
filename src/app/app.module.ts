import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import {MatButtonModule, MatToolbarModule} from '@angular/material';
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
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
