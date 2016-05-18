import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';
import {ControlGroup, Control} from '@angular/common';
import { ILang } from './language';

@Component({  
    selector: 'lang-switcher',
    templateUrl: 'app/Shared/lang-switcher.component.html',
    pipes: [ TranslatePipe ]
})
export class LangSwitcherComponent implements OnInit {
    langForm: ControlGroup;           
    supportedLanguages: ILang[] = [
        {
            code: "en",
            title: "English"
        },
        {
            code: "vi",
            title: "Vietnamese"
        }
    ];
   
    
    constructor(private _translate: TranslateService) { 
        this.langForm = new ControlGroup({
            lang: new Control(this.supportedLanguages[0].code)
        });                
    }

    private changeLanguage(event: any): void {                
        let lang = this.supportedLanguages[0].code; // fallback to default 'en'
        
        if(event && event.target){
            lang = this.supportedLanguages[event.target.selectedIndex].code; 
        }        
        
        this._translate.use(lang);
        
        console.log(this._translate.currentLang)
    }
    
    ngOnInit() { 
        
    }

}