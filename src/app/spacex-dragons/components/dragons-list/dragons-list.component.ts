import { Component, OnInit } from '@angular/core';
import {SpacexService} from "../../../api/services/spacex.service";
import {Dragon} from "../../../api/models/dragon";
import {map} from "rxjs";

@Component({
  selector: 'app-dragons-list',
  templateUrl: './dragons-list.component.html',
  styleUrls: ['./dragons-list.component.css']
})
export class DragonsListComponent implements OnInit {

  dragons: Dragon[] = []
  constructor(private spacexapi: SpacexService) { }

  ngOnInit(): void {
    this.spacexapi.getDragons().pipe(
      map(data => data as Dragon[])
    ).subscribe(result => {
      this.dragons = result;
    });
  }

}
