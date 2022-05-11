import {Component, OnInit} from '@angular/core';
import {Launch} from "../../../api/models/launch";
import {SpacexService} from "../../../api/services/spacex.service";
import {map} from "rxjs";

@Component({
  selector: 'app-spacex-next-launch-page',
  templateUrl: './spacex-next-launch-page.component.html',
  styleUrls: ['./spacex-next-launch-page.component.css']
})
export class SpacexNextLaunchPageComponent implements OnInit {

  launches: Launch[] = []


  constructor(private spacexApi: SpacexService) {
  }

  ngOnInit(): void {
    this.spacexApi.getNextLaunch().pipe(
      map(data => data as Launch)
    ).subscribe(result => {
      this.launches.push(result);
    });
  }

}
