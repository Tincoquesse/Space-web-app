import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-spacex-top-logo',
  templateUrl: './spacex-top-logo.component.html',
  styleUrls: ['./spacex-top-logo.component.css']
})
export class SpacexTopLogoComponent implements OnInit {

  path: string = "assets/images/spacex-logo.png";
  alttext: string = "first image"

  constructor() {
  }

  ngOnInit(): void {
  }

}
