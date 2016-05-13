import { Component, OnInit } from 'angular2/core';
import { CategoryService } from '../JOB_CATEGORY/category.service';

@Component({   
    templateUrl: './Home/home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(private _categoryService: CategoryService){
        
    }
    
    ngOnInit(): void {      
        //  this._productService.getProducts()
        //     .subscribe(products => this.products = products,
        //                error => this.errorMessage = <any>error);
    }
}