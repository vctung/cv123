import { Component, OnInit } from 'angular2/core';
import { CategoryService } from '../JOB_CATEGORY/category.service';
import { IPopularCategory } from './popularcategory';
import { CategoryLanguagePipe } from './category-language-filter';

@Component({   
    selector: 'job_category',
    templateUrl: './JOB_CATEGORY/category.component.html',
    providers: [ CategoryService ],
    pipes: [CategoryLanguagePipe]
})
export class CategoryComponent implements OnInit {
    jobCategories: IPopularCategory[];
    errorMessage: string;
    
    constructor(private _categoryService: CategoryService){
        
    }
    
    ngOnInit(): void {      
        this._categoryService.getPopularCategories()
        .subscribe(jobCategories => this.jobCategories = jobCategories,
                   error => this.errorMessage = <any>error);        
    }
}