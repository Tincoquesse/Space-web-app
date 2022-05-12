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
  launchesBase: Launch[] = [];
  placeholder = "Type mission..."

  constructor(private spacexApi: SpacexService) {
  }


  ngOnInit(): void {
    this.spacexApi.getPastLaunches().pipe(
      map(data => data as Launch[]),
      map(results => results.sort((a, b) => b.date_unix - a.date_unix))
    ).subscribe(results => {
      this.launchesBase = results
      this.launches = results
    });
  }


  onSearchChange = (searchTerm: string) =>
    searchTerm === '' ?
      this.launches = [...this.launchesBase]
      : this.launches = this.launchesBase.filter(launch =>
        launch.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));

}
