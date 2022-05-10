import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LaunchComponent} from '../shared/components/launch/launch.component';
import {SpacexPastLaunchesPageComponent} from './pages/spacex-past-launches-page/spacex-past-launches-page.component';
import {LaunchListComponent} from './components/launch-list/launch-list.component';


@NgModule({
  declarations: [
    LaunchComponent,
    SpacexPastLaunchesPageComponent,
    LaunchListComponent
  ],
  exports: [
    SpacexPastLaunchesPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SpacexPastLaunchesModule {
}
