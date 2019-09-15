import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, PreloadAllModules } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  EventsListComponent,
  CreateEventComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventService,
  EventListResolver,
  EventResolver,
  CreateSessionComponent,
  SessionsListComponent,
  UpvoteComponent,
  VoterService,
  DurationPipe,
  LocationValidator
} from "./events/index";
import { EventsAppComponent } from "./events-app.component";

import { NavBarComponent } from "./nav/navbar.component";
import { Error404Component } from "./errors/404.component";

import {
  TOASTR_TOKEN,
  Toastr,
  JQ_TOKEN,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective
} from "./common";
import { AuthService } from "./user/auth.service";

import { appRoutes } from "./routes";

import { HttpClientModule } from "@angular/common/http";

let toastr: Toastr = window["toastr"];
let jQuery = window["$"];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    NavBarComponent,
    CreateSessionComponent,
    SessionsListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    ModalTriggerDirective,
    LocationValidator,
    DurationPipe
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventResolver,
    EventListResolver,
    VoterService,
    AuthService,
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState }
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      "You have not saved this event, do you really want to cancel?"
    );
  } else {
    return true;
  }
}
