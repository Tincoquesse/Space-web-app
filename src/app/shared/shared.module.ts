import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpacexNavbarComponent} from './components/spacex-navbar/spacex-navbar.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {SpacexSearchBarComponent} from './components/spacex-search-bar/spacex-search-bar.component';
import {SpacexTopLogoComponent} from './components/spacex-top-logo/spacex-top-logo.component';
import {FirstUpPipe} from './pipes/first-up.pipe';


@NgModule({
  declarations: [
    SpacexNavbarComponent,
    SpacexSearchBarComponent,
    SpacexTopLogoComponent,
    FirstUpPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule

  ],
  exports: [
    SpacexNavbarComponent,
    SpacexSearchBarComponent,
    SpacexTopLogoComponent,
    FirstUpPipe
  ]
})
export class SharedModule {
}
