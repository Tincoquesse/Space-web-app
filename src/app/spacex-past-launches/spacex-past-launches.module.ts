import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LaunchComponent} from '../shared/components/launch/launch.component';
import {SpacexPastLaunchesPageComponent} from './pages/spacex-past-launches-page/spacex-past-launches-page.component';
import {LaunchListComponent} from './components/launch-list/launch-list.component';
import {SharedModule} from "../shared/shared.module";


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
    CommonModule,
    SharedModule
  ]
})
export class SpacexPastLaunchesModule {
}
