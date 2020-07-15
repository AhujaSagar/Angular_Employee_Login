import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageLabel'
})
export class AgeLabelPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    return `${value} years old`;
  }

}
