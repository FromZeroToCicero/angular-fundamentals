import { Component } from "@angular/core";
import { AuthService } from './user/auth.service';

@Component({
  selector: "app-events",
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.checkAuthStatus();
  }
}
