import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchComponent } from './components/launch/launch.component';
import { SpacexNextLaunchPageComponent } from './pages/spacex-next-launch-page/spacex-next-launch-page.component';



@NgModule({
  declarations: [
    LaunchComponent,
    SpacexNextLaunchPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SpacexNextLaunchModule { }
