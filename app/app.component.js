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
var platform_browser_1 = require('@angular/platform-browser');
require('rxjs/Rx');
var router_deprecated_1 = require('@angular/router-deprecated');
var home_component_1 = require('./Home/home.component');
var product_component_1 = require('./Product/product.component');
var nav_component_1 = require('./Shared/nav.component');
var footer_component_1 = require('./Shared/footer.component');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var AppComponent = (function () {
    function AppComponent(_translate, _router, _title) {
        var _this = this;
        this._translate = _translate;
        this._router = _router;
        this._title = _title;
        _translate.use('en');
        _router.subscribe(function (url) {
            _title.setTitle(_this.getTitleFromUrl(url));
        });
    }
    AppComponent.prototype.getTitleFromUrl = function (url) {
        switch (url) {
            case "home":
                return "Home";
            default:
                return "Curriculum Vitate";
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'cv-app',
            templateUrl: 'app/app.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, nav_component_1.NavComponent, footer_component_1.FooterComponent],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, platform_browser_1.Title],
            pipes: [ng2_translate_1.TranslatePipe]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
            { path: '/product', name: 'Product', component: product_component_1.ProductComponent }
        ]), 
        __metadata('design:paramtypes', [ng2_translate_1.TranslateService, router_deprecated_1.Router, platform_browser_1.Title])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map