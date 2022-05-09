import { Component, OnInit } from '@angular/core';
import {SpacexService} from "../../../api/services/spacex.service";
import {Launch} from "../../../api/models/launch";
import {map} from "rxjs";
import {Dragon} from "../../../api/models/dragon";

@Component({
  selector: 'app-spacex-net-launch-page',
  templateUrl: './spacex-next-launch-page.component.html',
  styleUrls: ['./spacex-next-launch-page.component.css']
})
export class SpacexNextLaunchPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
