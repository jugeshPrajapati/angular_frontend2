import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe', //this name use in html
  standalone: true,
})
export class MypipePipe implements PipeTransform {
  transform(list: any, filterBy: string) {
    console.log('filter pipe is working');
    if (
      filterBy.toLowerCase() == 'all' ||
      filterBy === '' ||
      list.length === 0
    ) {
      return list;
    } else {
      return list.filter((item: any) => {
        return (item.inStock > 0).toString() === filterBy;
      });
    }
  }
}
