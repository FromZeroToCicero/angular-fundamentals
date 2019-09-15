import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";
import { ISession, IEvent } from "../events";
import { EventService } from "../events/shared/event.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styles: [
    `
      li > a.active {
        color: #f97924;
      }
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
    `
  ]
})
export class NavBarComponent {
  searchTerm: string = "";
  foundSessions: ISession[];
  events: IEvent[];
  constructor(public auth: AuthService, private eventService: EventService) {}

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }
}
