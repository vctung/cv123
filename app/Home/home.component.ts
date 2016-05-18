import { Component, OnInit } from '@angular/core';
import { CategoryComponent } from '../JOB_CATEGORY/category.component';
import { TranslatePipe } from 'ng2-translate/ng2-translate';

@Component({   
    templateUrl: 'app/Home/home.component.html',
    directives: [ CategoryComponent ],
    pipes: [ TranslatePipe ]
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