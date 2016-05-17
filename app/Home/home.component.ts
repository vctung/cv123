import { Component, OnInit } from 'angular2/core';
import { CategoryComponent } from '../JOB_CATEGORY/category.component';

@Component({   
    templateUrl: './Home/home.component.html',
    directives: [ CategoryComponent ]
})
export class HomeComponent implements OnInit {
    constructor(){
        
    }
    
    ngOnInit(): void {      
        //  this._productService.getProducts()
        //     .subscribe(products => this.products = products,
        //                error => this.errorMessage = <any>error);
    }
}