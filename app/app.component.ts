import {Component} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { Title } from 'angular2/platform/browser';
import 'rxjs/Rx';
import { ROUTER_PROVIDERS, Router, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HomeComponent } from './Home/home.component';

@Component({
    selector: 'cv-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],   
    directives: [ROUTER_DIRECTIVES],
    providers: [ HTTP_PROVIDERS, ROUTER_PROVIDERS, Title]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },    
])
export class AppComponent {
    pageTitle: string = "Curriculum Vitate";
    
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