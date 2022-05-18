import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-spacex-to-do-item-creator',
  templateUrl: './spacex-to-do-item-creator.component.html',
  styleUrls: ['./spacex-to-do-item-creator.component.css']
})
export class SpacexToDoItemCreatorComponent implements OnInit {

  @Output() onItemCreate = new EventEmitter<string>();
  itemCreator = new FormGroup({
    itemLabel: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z\\s]*$')
    ])
  });

  ngOnInit() {

  }

  onItemSubmit = () => {
    if (this.itemCreator.valid) {
      this.onItemCreate.emit(this.itemCreator.value.itemLabel);
      this.itemCreator.reset();
    }
  }

  hasRequiredError = (): boolean =>
    !!(this.itemCreator?.controls['itemLabel'].errors?.hasOwnProperty('required')
      && this.itemCreator?.controls['itemLabel'].touched);

  hasMinLengthError = (): boolean =>
    !!this.itemCreator?.controls['itemLabel'].errors?.hasOwnProperty('minlength');

  hasMinPatternError = (): boolean =>
    !!this.itemCreator?.controls['itemLabel'].errors?.hasOwnProperty('pattern');
}

