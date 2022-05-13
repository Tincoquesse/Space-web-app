import {Component, OnInit} from '@angular/core';
import {Launch} from "../../../api/models/launch";
import {SpacexService} from "../../../api/services/spacex.service";
import {map} from "rxjs";

@Component({
  selector: 'app-next-launch-list',
  templateUrl: './next-launch-list.component.html',
  styleUrls: ['./next-launch-list.component.css']
})
export class NextLaunchListComponent implements OnInit {

  launch: Launch | undefined;

  constructor(private spacexApi: SpacexService) {
  }

  ngOnInit(): void {
    this.spacexApi.getNextLaunch().pipe(
      map(data => data as Launch)
    ).subscribe(result => {
      this.launch = result;

    });


  }


}
