import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-spacex-navbar',
  templateUrl: './spacex-navbar.component.html',
  styleUrls: ['./spacex-navbar.component.css']
})
export class SpacexNavbarComponent implements OnInit {

  @Input() routes: { label: string, route: string }[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
