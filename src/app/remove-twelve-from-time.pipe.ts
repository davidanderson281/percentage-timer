import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeTwelveFromTime'
})
export class RemoveTwelveFromTimePipe implements PipeTransform {

  transform(value: string | null): string | null {
    if (value) {
      if (value.startsWith('12')) {
        if (value = '12:00:00') {
          return 'No time left today'
        } else {
          return '00' + value.substring(2) + ' left';
        }
      } else {
        return value + ' left'
      }
    } else {
      return null
    }
  }

}
