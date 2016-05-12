import {Component} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { Title } from 'angular2/platform/browser';
import 'rxjs/Rx';
import { ROUTER_PROVIDERS, Router, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HomeComponent } from './Home/home.component';
import { ProductComponent } from './Product/product.component';
import { NavComponent } from './Shared/nav.component';
import { FooterComponent } from './Shared/footer.component';


@Component({
    selector: 'cv-app',
    templateUrl: 'app.component.html',       
    directives: [ROUTER_DIRECTIVES, NavComponent, FooterComponent],
    providers: [ HTTP_PROVIDERS, ROUTER_PROVIDERS, Title]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/product', name: 'Product', component: ProductComponent }    
])
export class AppComponent {        
    constructor(private _router:Router, private _title:Title) {
       _router.subscribe((url)=>{ //fires on every URL change
          _title.setTitle(this.getTitleFromUrl(url));
       });                 
    }
    
    getTitleFromUrl(url: string): string {       
        switch(url){
            case "home":
                return "Home";
            default:
                return "Curriculum Vitate";
        }        
    }
}