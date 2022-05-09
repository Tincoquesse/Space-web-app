import { Component, OnInit } from '@angular/core';
import {Launch} from "../../../api/models/launch";
import {SpacexService} from "../../../api/services/spacex.service";
import {map} from "rxjs";

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  launches: Launch[] = [];

  constructor(private spacexApi: SpacexService) {
  }


  ngOnInit(): void {
    this.spacexApi.getNextLaunch().pipe(
      map(data => data as Launch[])
    ).subscribe(result => {
      this.launches = result;
    });
  }
}
