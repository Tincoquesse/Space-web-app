import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'firstUp'
})
export class FirstUpPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (typeof value === 'undefined' || value === null) {
      return " Source is null or undefined";
    }
    const tempArray = value.split(" ");
    tempArray.forEach(function (word, index) {
      tempArray[index] = word[0].toUpperCase() + word.slice(1);
    });

    return tempArray.join(' ');
  }
}

