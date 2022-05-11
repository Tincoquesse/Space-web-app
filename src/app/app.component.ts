import {Component} from '@angular/core';
import {RoutesConfig} from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Space-web-app';

  routes: { label: string, route: string }[] = [
    {
      label: 'Dragons',
      route: RoutesConfig.sxDragons
    }, {
      label: 'Past Launches',
      route: RoutesConfig.sxPastLaunches
    }, {
      label: 'Next Launch',
      route: RoutesConfig.sxNextLaunch
    }];

}
