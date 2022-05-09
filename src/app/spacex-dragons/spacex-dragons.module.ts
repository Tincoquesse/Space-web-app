import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragonComponent } from './components/dragon/dragon.component';
import { DragonsListComponent } from './components/dragons-list/dragons-list.component';
import { SpacexDragonsPageComponent } from './pages/spacex-dragons-page/spacex-dragons-page.component';




@NgModule({
  declarations: [
    DragonComponent,
    DragonsListComponent,
    SpacexDragonsPageComponent
  ],
  exports: [
    SpacexDragonsPageComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SpacexDragonsModule { }
