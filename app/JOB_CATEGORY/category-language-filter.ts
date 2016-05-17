import { Pipe, PipeTransform } from 'angular2/core';
import { IPopularCategory } from './popularcategory';

@Pipe({
    name: 'categoryFilter'
})

export class CategoryLanguagePipe implements PipeTransform {
    transform(value: IPopularCategory[], args: string[]): IPopularCategory[] {
       // let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
         
      //  return filter ? value.filter((category: IPopularCategory) => 
           // category.language_id == 1) : value;
         return value.filter((category: IPopularCategory) => 
            category.language_id == 1);
    }
}