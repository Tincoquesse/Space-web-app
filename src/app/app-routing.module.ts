import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {HomePageComponent} from "./home/pages/home-page/home-page.component";
import {SpacexDragonsPageComponent} from "./spacex-dragons/pages/spacex-dragons-page/spacex-dragons-page.component";
import {
  SpacexPastLaunchesPageComponent
} from "./spacex-past-launches/pages/spacex-past-launches-page/spacex-past-launches-page.component";
import {
  SpacexNextLaunchPageComponent
} from "./spacex-next-launch/pages/spacex-next-launch-page/spacex-next-launch-page.component";

export const enum RoutesConfig {
  // home= 'home',
  sxDragons = 'sx-dragons',
  sxPastLaunches = 'sx-past-launches',
  sxNextLaunch = 'sx-next-launch'
}

const routes: Routes = [
  // {path: RoutesConfig.home, component: HomePageComponent},
  {path: RoutesConfig.sxDragons, component: SpacexDragonsPageComponent},
  {path: RoutesConfig.sxNextLaunch, component: SpacexNextLaunchPageComponent},
  {path: RoutesConfig.sxPastLaunches, component: SpacexPastLaunchesPageComponent},
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: SpacexPastLaunchesPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
