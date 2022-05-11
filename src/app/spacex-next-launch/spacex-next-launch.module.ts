import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpacexNextLaunchPageComponent} from './pages/spacex-next-launch-page/spacex-next-launch-page.component';
import {LaunchComponent} from "../shared/components/launch/launch.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    SpacexNextLaunchPageComponent,
    LaunchComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LaunchComponent,
    SpacexNextLaunchPageComponent
  ]
})
export class SpacexNextLaunchModule {
}
