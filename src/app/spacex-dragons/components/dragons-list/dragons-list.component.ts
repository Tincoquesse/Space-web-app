import {Component, OnInit} from '@angular/core';
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
  dragonsBase: Dragon[] = []
  placeholder = "Type dragon..."

  constructor(private spacexApi: SpacexService) {
  }

  ngOnInit(): void {
    this.spacexApi.getDragons().pipe(
      map(data => data as Dragon[])
    ).subscribe(result => {
      this.dragons = result;
      this.dragonsBase = result;
    });
  }

  onSearchChange = (searchTerm: string) =>
    searchTerm === '' ?
      this.dragons = [...this.dragonsBase]
      : this.dragons = this.dragonsBase.filter(dragon =>
        dragon.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));

}
