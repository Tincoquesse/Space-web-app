import {Component, Input} from '@angular/core';
import {Dragon} from "../../../api/models/dragon";

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.css']
})
export class DragonComponent {

  @Input() dragon: Dragon | undefined;

}
