import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

@Component({   
    selector: 'navigation-app',
    templateUrl: 'app/Shared/nav.component.html',
    directives: [ ROUTER_DIRECTIVES ],
    pipes: [ TranslatePipe ]
})
export class NavComponent {
    constructor(private _translate: TranslateService) {              
    }
    private changeLanguage(lang: string): void {         
        this._translate.use(lang);            
    }    
}
