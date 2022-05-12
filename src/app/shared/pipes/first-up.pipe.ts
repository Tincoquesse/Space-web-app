import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'firstUp'
})
export class FirstUpPipe implements PipeTransform {

  transform(value: string): string {
    const tempArray = value.split(" ");
    tempArray.forEach(word => word.charAt(0).toUpperCase() + word.slice(1));
    return tempArray.join(" ");
  }

}
