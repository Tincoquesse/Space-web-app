import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-spacex-search-bar',
  templateUrl: './spacex-search-bar.component.html',
  styleUrls: ['./spacex-search-bar.component.css']
})
export class SpacexSearchBarComponent implements OnInit {

  @Output() onValueChange = new EventEmitter<string>();
  @Input() placeholder: string = ''
  searchInput = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {
    this.searchInput.valueChanges.pipe(
      debounceTime(600),
    ).subscribe(value => this.onValueChange.emit(value));
  }

}
