import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
})
export class SortPipe implements PipeTransform {
  transform(array: any, type: string = 'asc'): any {
    if (!Array.isArray(array)) throw new Error('Value to sort isn’t an array');

    switch (type) {
      case 'asc':
        return array.sort();
        break;
      case 'desc':
        return array.sort().reverse();
        break;
      default:
        return array;
        break;
    }
  }
}
