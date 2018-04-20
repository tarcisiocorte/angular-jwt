import { Component } from '@angular/core';
import { ApiService } from './api.services'

@Component({
    selector: 'post',
    styleUrls: ['post.component.css'],
    template: `<mat-card>
    <mat-card-header>
        <mat-card-title>
            <h4>New Post</h4>
        </mat-card-title>
    </mat-card-header>
    <mat-card-content>
        <form>
            <mat-form-field>
                    <textarea matInput [(ngModel)]="postMsg" name="description" mdInput placeholder="Post Message"></textarea>
            </mat-form-field>
            <button (click)="post()" mat-raised-button color="primary">Register</button>
        </form>
    </mat-card-content>
</mat-card>`
})
export class PostComponent {
    constructor(private apiService: ApiService) { }
    postMsg = ''

    post() {
        this.apiService.postMessage({msg: this.postMsg})
    }
}
