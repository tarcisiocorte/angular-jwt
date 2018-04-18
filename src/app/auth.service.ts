import { Http } from '@angular/http'
import { Injectable } from '@angular/core'

@Injectable()
export class AuthService {
    messages = []

    constructor( private http: Http) {}

    registerUser(registerData) {
        this.http.post('http://localhost:3000/auth/register', registerData).subscribe(res => {
        })
    }    
    loginUser(loginData) {
        this.http.post('http://localhost:3000/auth/login', loginData).subscribe(res => {
            console.log(res)
            localStorage.setItem('token', res.json().token)
        })
    }

}