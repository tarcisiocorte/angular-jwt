import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService{
    constructor(private http: Http){} 

    messages =[];
    informations =[];
    users = []
    
    getMessage(){
        this.http.get('http://localhost:3000/posts').subscribe(res => {
            this.messages = res.json();
        })
    }

    getUsers(){
        this.http.get('http://localhost:3000/users').subscribe(res => {
            this.users = res.json();            
        })
    }

    getInformation(){
        this.http.get('http://localhost:3000/information').subscribe(res => {
            this.informations = res.json();
        })
    }
}