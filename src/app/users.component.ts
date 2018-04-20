import { Component } from '@angular/core';
import { ApiService } from './api.services'

@Component({
    selector: 'users',
    template: `
        <div *ngFor="let user of apiService.users">
          <mat-card [routerLink]="['/profile', user._id]" style="cursor: pointer">{{user.name}}</mat-card>
        </div>
    `
})
export class UserComponent {
    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.apiService.getUsers();
    }
}
