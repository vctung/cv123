import {Component} from '@angular/core';
import { Title } from '@angular/platform-browser';
import 'rxjs/Rx';
import { RouteConfig, ROUTER_DIRECTIVES, Router, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HomeComponent } from './Home/home.component';
import { ProductComponent } from './Product/product.component';
import { NavComponent } from './Shared/nav.component';
import { FooterComponent } from './Shared/footer.component';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

@Component({
    selector: 'cv-app',
    templateUrl: 'app/app.component.html',       
    directives: [ROUTER_DIRECTIVES, NavComponent, FooterComponent],
    providers: [ ROUTER_PROVIDERS, Title],
    pipes: [ TranslatePipe ]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/product', name: 'Product', component: ProductComponent }    
])
export class AppComponent {  
    constructor(private _translate: TranslateService, private _router:Router, private _title:Title) {               
        _translate.use('en');
        
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