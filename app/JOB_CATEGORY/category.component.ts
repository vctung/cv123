import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../JOB_CATEGORY/category.service';
import { IPopularCategory } from './popularcategory';
import { CategoryLanguagePipe } from './category-language-filter';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({   
    selector: 'job_category',
    templateUrl: 'app/JOB_CATEGORY/category.component.html',
    providers: [ CategoryService ],
    pipes: [CategoryLanguagePipe]
})
export class CategoryComponent implements OnInit {
    jobCategories: IPopularCategory[];
    errorMessage: string;
    
    currentLanguage: string;
    constructor(private _categoryService: CategoryService, private _translate: TranslateService){
        
    }
    
    getLang(): string {       
        return this._translate.currentLang;
    }
    
    ngOnInit(): void {      
        this._categoryService.getPopularCategories()
            .subscribe(jobCategories => this.jobCategories = jobCategories,
                       error => this.errorMessage = <any>error);
        this.currentLanguage = this._translate.currentLang;                               
    }       
}