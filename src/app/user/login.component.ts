import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./login.component.html",
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
    `
  ]
})
export class LoginComponent {
  userName;
  password;
  mouseoverLogin;
  loginInvalid = false;
  constructor(private authService: AuthService, private router: Router) {}

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password).subscribe(resp => {
      if (!resp) {
        this.loginInvalid = true;
      } else {
        this.router.navigate(["events"]);
      }
    });
  }

  cancel() {
    this.router.navigate(["events"]);
  }
}
