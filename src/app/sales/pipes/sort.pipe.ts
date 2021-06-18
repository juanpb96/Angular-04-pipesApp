import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform( heroes: Hero[], sortBy: string = '' ): Hero[] {
    switch(sortBy) {
      case 'name':
        return heroes.sort((h1, h2) => (h1.name > h2.name) ? 1 : -1);
      case 'canfly':
        return heroes.sort((h1, h2) => (h1.canFly < h2.canFly) ? 1 : -1);
      case 'color':
        return heroes.sort((h1, h2) => (h1.color > h2.color) ? 1 : -1);
      default: 
        return heroes;
    };
  }

}
