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

  launch: Launch = {
    auto_update: false,
    capsules: [""],
    cores: [{
      core: "",
      flight: 0,
      gridfins: false,
      landing_attempt: false,
      landing_success: false,
      landing_type: "",
      landpad: "",
      legs: false,
      reused: false
    }],
    crew: [],
    date_local: "",
    date_precision: "",
    date_unix: 0,
    date_utc: "",
    details: "",
    failures: [],
    fairings: null,
    flight_number: 0,
    id: "",
    launchpad: "",
    links: {
      article: "",
      flickr: {original: ["", "", "", "", ""], small: []},
      patch: {large: "", small: ""},
      presskit: "",
      reddit: {campaign: "", launch: "", media: "", recovery: undefined},
      webcast: "",
      wikipedia: undefined,
      youtube_id: ""
    },
    net: false,
    payloads: [""],
    rocket: "",
    ships: [],
    static_fire_date_unix: 0,
    static_fire_date_utc: "",
    success: true,
    tdb: false,
    upcoming: false,
    window: 0,
    name: 'kamil'
  }

  constructor(private spacexApi: SpacexService) {
  }

  ngOnInit(): void {
    this.spacexApi.getNextLaunch().pipe(
      map(data => data as Launch)
    ).subscribe(result => {
      this.launch = result;
      console.log(result)
    });


  }


}
