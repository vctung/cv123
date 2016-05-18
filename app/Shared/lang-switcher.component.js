"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var common_1 = require('@angular/common');
var LangSwitcherComponent = (function () {
    function LangSwitcherComponent(_translate) {
        this._translate = _translate;
        this.supportedLanguages = [
            {
                code: "en",
                title: "English"
            },
            {
                code: "vi",
                title: "Vietnamese"
            }
        ];
        this.langForm = new common_1.ControlGroup({
            lang: new common_1.Control(this.supportedLanguages[0].code)
        });
    }
    LangSwitcherComponent.prototype.changeLanguage = function (event) {
        var lang = this.supportedLanguages[0].code; // fallback to default 'en'
        if (event && event.target) {
            lang = this.supportedLanguages[event.target.selectedIndex].code;
        }
        this._translate.use(lang);
        console.log(this._translate.currentLang);
    };
    LangSwitcherComponent.prototype.ngOnInit = function () {
    };
    LangSwitcherComponent = __decorate([
        core_1.Component({
            selector: 'lang-switcher',
            templateUrl: 'app/Shared/lang-switcher.component.html',
            pipes: [ng2_translate_1.TranslatePipe]
        }), 
        __metadata('design:paramtypes', [ng2_translate_1.TranslateService])
    ], LangSwitcherComponent);
    return LangSwitcherComponent;
}());
exports.LangSwitcherComponent = LangSwitcherComponent;
//# sourceMappingURL=lang-switcher.component.js.map