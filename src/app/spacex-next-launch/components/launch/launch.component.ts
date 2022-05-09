import {Component, Input} from '@angular/core';
import {Launch} from "../../../api/models/launch";

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent {

  @Input() launch: Launch | undefined;

}
