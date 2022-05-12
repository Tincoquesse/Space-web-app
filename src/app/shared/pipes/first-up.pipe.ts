import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'firstUp'
})
export class FirstUpPipe implements PipeTransform {

  transform(value: string, format: string): string {
    const tempArray = value.split(" ");
    tempArray.forEach(word => word.charAt(0).toUpperCase());
    return tempArray.join(format);
  }

}
