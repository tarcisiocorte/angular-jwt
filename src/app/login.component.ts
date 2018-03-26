import { Component } from '@angular/core';
import { ApiService } from "./api.services";

@Component({
  selector: 'login',
  template: `
      <mat-card>
        <mat-card-header>
          <mat-card-title>
            <h4>Login</h4>
          </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form>
            <mat-input-container>
              <input [(ngModel)]="loginData.email" name="email" matInput placeholder="email" type="email">
            </mat-input-container>
            <mat-input-container>
              <input [(ngModel)]="loginData.pwd" name="pwd" matInput placeholder="password" type="password">
            </mat-input-container>        
            <button (click)="post()" mat-raised-button color="primary">Login</button>
          </form>
        </mat-card-content>
      </mat-card>
  `
})
export class LoginComponent {
  loginData = {}

  constructor(private apiService: ApiService){}

  post(){
    console.log(this.loginData);
    this.apiService.loginUser(this.loginData);    
  }

}

