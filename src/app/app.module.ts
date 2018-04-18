import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatFormFieldModule} from '@angular/material/form-field';


import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule,
  MatFormFieldControl,
  
} from '@angular/material'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { ApiService } from './api.services'
import { AuthService } from './auth.service'
import { MessagesComponent } from './messages.components'
import { RegisterComponent } from './register.components'
import { LoginComponent } from './login.component'
import { UserComponent } from './users.component'
import { ProfileComponent } from './profile.component'
import { PostComponent } from './post.component'



const routes = [  
  { path: '', component: PostComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserComponent },
  { path: 'profile/:id', component: ProfileComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    ProfileComponent,
    PostComponent        
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
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatFormFieldModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
