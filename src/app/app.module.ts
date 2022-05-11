import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {SpacexDragonsModule} from "./spacex-dragons/spacex-dragons.module";
import {SpacexPastLaunchesModule} from "./spacex-past-launches/spacex-past-launches.module";
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {SpacexNextLaunchModule} from "./spacex-next-launch/spacex-next-launch.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SpacexDragonsModule,
    SpacexPastLaunchesModule,
    SharedModule,
    AppRoutingModule,
    SpacexNextLaunchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
