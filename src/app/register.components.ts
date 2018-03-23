import { Component } from '@angular/core';

@Component({
  selector: 'register',
  template: `
      <mat-card>
        <mat-card-header>
          <mat-card-title>
            <h4>Register New User</h4>
          </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form>
            <mat-input-container>
              <input [(ngModel)]="registerData.email" name="email" matInput placeholder="email" type="email">
            </mat-input-container>
            <mat-input-container>
              <input [(ngModel)]="registerData.password" name="password" matInput placeholder="password" type="password">
            </mat-input-container>        
            <button (click)="post()" mat-raised-button color="primary">Register</button>
          </form>
        </mat-card-content>
      </mat-card>
  `
})
export class RegisterComponent {
  registerData = {}

  post(){
    console.log(this.registerData);    
  }

}

