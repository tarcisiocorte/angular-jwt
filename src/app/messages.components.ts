import { Component } from '@angular/core';
import { ApiService } from "./api.services";

@Component({
  selector: 'messages',
  template: `<div *ngFor="let message of apiService.messages">
  <mat-card>{{message.message}}</mat-card>
</div>
<ul>
  <li *ngFor="let information of apiService.informations">
    {{information.info}}
  </li>
</ul>`
})
export class MessagesComponent {
  constructor(private apiService: ApiService){}

  ngOnInit() {
    this.apiService.getMessage();
    this.apiService.getInformation();
  }
}