import { Component } from '@angular/core';
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showLoadingIncdicator = true;
  constructor(private _router: Router) {
    this._router.events.subscribe((routerEvent : Event) => {
      if(routerEvent instanceof NavigationStart) {
        this.showLoadingIncdicator = true;
      }

      if(routerEvent instanceof NavigationCancel || NavigationEnd || NavigationError) {
        this.showLoadingIncdicator = false;
      }
    });
  }
}
