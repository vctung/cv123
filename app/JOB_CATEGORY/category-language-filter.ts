import { Pipe, PipeTransform } from '@angular/core';
import { IPopularCategory } from './popularcategory';

@Pipe({
    name: 'categoryFilter'
})

export class CategoryLanguagePipe implements PipeTransform {    
    transform(value: IPopularCategory[], args: string[]): IPopularCategory[] {
        //console.log(this._translate.currentLang);
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : 'en';
      
         console.log(filter);
         console.log(value);
      //  return filter ? value.filter((category: IPopularCategory) => 
           // category.language_id == 1) : value;
           var result = value.filter((category: IPopularCategory) => 
            category.language_culture.toLocaleLowerCase().indexOf(filter) > -1);
            
            console.log(result);
         return filter ? value.filter((category: IPopularCategory) => 
            category.language_culture.toLocaleLowerCase().indexOf(filter) > -1) : value;
    }
}