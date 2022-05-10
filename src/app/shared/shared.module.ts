import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpacexNavbarComponent} from './components/spacex-navbar/spacex-navbar.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {SpacexSearchBarComponent} from './components/spacex-search-bar/spacex-search-bar.component';


@NgModule({
  declarations: [
    SpacexNavbarComponent,
    SpacexSearchBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule

  ],
  exports: [
    SpacexNavbarComponent,
    SpacexSearchBarComponent
  ]
})
export class SharedModule {
}
