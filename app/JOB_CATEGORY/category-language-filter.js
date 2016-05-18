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
var CategoryLanguagePipe = (function () {
    function CategoryLanguagePipe() {
    }
    CategoryLanguagePipe.prototype.transform = function (value, args) {
        //console.log(this._translate.currentLang);
        var filter = args[0] ? args[0].toLocaleLowerCase() : 'en';
        console.log(filter);
        console.log(value);
        //  return filter ? value.filter((category: IPopularCategory) => 
        // category.language_id == 1) : value;
        var result = value.filter(function (category) {
            return category.language_culture.toLocaleLowerCase().indexOf(filter) > -1;
        });
        console.log(result);
        return filter ? value.filter(function (category) {
            return category.language_culture.toLocaleLowerCase().indexOf(filter) > -1;
        }) : value;
    };
    CategoryLanguagePipe = __decorate([
        core_1.Pipe({
            name: 'categoryFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], CategoryLanguagePipe);
    return CategoryLanguagePipe;
}());
exports.CategoryLanguagePipe = CategoryLanguagePipe;
//# sourceMappingURL=category-language-filter.js.map