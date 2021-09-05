import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchText: string): any {
    if (!searchText) {
      return items;
    }
    return items.filter( (item: any) => item.uName.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      //Uncomment for searching by body or title or all at once
      //item.title.toLowerCase().indexOf(searchText.toLowerCase())> -1 ||
      //item.body.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
      )
  }
}
