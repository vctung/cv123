import { Pipe, PipeTransform } from '@angular/core';
import { IPopularCategory } from './popularcategory';

@Pipe({
    name: 'categoryFilter'
})

export class CategoryLanguagePipe implements PipeTransform {    
    transform(value: IPopularCategory[], args: string[]): IPopularCategory[] {       
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : 'en';
                      
        return filter ? value.filter((category: IPopularCategory) => 
            category.language_culture.toLocaleLowerCase().indexOf(filter) > -1) : value;
    }
}