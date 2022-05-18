import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpacexToDoPageComponent} from './pages/spacex-to-do-page/spacex-to-do-page.component';
import {SharedModule} from "../shared/shared.module";
import {SpacexToDoItemComponent} from './components/spacex-to-do-item/spacex-to-do-item.component';
import {
  SpacexToDoItemCreatorComponent
} from './components/spacex-to-do-item-creator/spacex-to-do-item-creator.component';

import {SpacexToDoListComponent} from './containers/spacex-to-do-list/spacex-to-do-list.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SpacexToDoPageComponent,
    SpacexToDoItemComponent,
    SpacexToDoItemCreatorComponent,
    SpacexToDoListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    SpacexToDoPageComponent
  ]
})
export class SpacexToDoModule {
}
