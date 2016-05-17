import {Component} from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { LangSwitcherComponent } from './lang-switcher.component';

@Component({   
    selector: 'navigation-app',
    templateUrl: './Shared/nav.component.html',
    directives: [ ROUTER_DIRECTIVES, LangSwitcherComponent ]
})
export class NavComponent {    
}