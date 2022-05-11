import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpacexNextLaunchPageComponent} from './pages/spacex-next-launch-page/spacex-next-launch-page.component';
import {SharedModule} from "../shared/shared.module";
import {NextLaunchListComponent} from "./components/next-launch-list/next-launch-list.component";


@NgModule({
  declarations: [
    SpacexNextLaunchPageComponent,
    NextLaunchListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SpacexNextLaunchPageComponent,

  ]
})
export class SpacexNextLaunchModule {
}
