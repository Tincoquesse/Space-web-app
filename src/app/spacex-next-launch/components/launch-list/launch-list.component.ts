import {Component, OnInit} from '@angular/core';
import {Launch} from "../../../api/models/launch";
import {SpacexService} from "../../../api/services/spacex.service";
import {map} from "rxjs";

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {

  launches: Launch[] = [];

  constructor(private spacexApi: SpacexService) {
  }


  ngOnInit(): void {
    this.spacexApi.getLaunches().pipe(
      map(data => data as Launch[])
    ).subscribe(result => {
      this.launches = result;
    });
  }
}
