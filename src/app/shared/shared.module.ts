import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpacexNavbarComponent} from './components/spacex-navbar/spacex-navbar.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SpacexNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule

  ],
  exports: [
    SpacexNavbarComponent
  ]
})
export class SharedModule {
}
