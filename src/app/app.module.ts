import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";

import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule,
  MatFormFieldControl
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ApiService } from "./api.services";
import { AuthService } from "./auth.service";
import { MessagesComponent } from "./messages.components";
import { RegisterComponent } from "./register.components";
import { LoginComponent } from "./login.component";
import { UserComponent } from "./users.component";
import { ProfileComponent } from "./profile.component";
import { PostComponent } from "./post.component";
import { AuthInterceptorService } from "./authInterceptor.service";

const routes = [
  { path: "", component: PostComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "users", component: UserComponent },
  { path: "profile/:id", component: ProfileComponent }
];

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
    HttpClientModule,
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
  providers: [
    ApiService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
