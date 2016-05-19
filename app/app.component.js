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
var nav_component_1 = require('./Shared/nav.component');
var footer_component_1 = require('./Shared/footer.component');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
/*** Company Part***/
var companylist_component_1 = require('./Company/companylist.component');
var companymanage_component_1 = require('./Company/companymanage.component');
/*** End Company Part***/
/*** Resume Part***/
var resumelist_component_1 = require('./Resume/resumelist.component');
var resumemanage_component_1 = require('./Resume/resumemanage.component');
/*** End Resume Part */
/*** Job Part ***/
var joblist_component_1 = require('./Job/joblist.component');
/*** End Job Part */
/*** User Part ***/
var login_component_1 = require('./User/login.component');
var register_component_1 = require('./User/register.component');
var userforgetpass_component_1 = require('./User/userforgetpass.component');
/*** End User Part */
var AppComponent = (function () {
    function AppComponent(_translate, _router, _title) {
        var _this = this;
        this._translate = _translate;
        this._router = _router;
        this._title = _title;
        this.isShowHeaderFooter = true;
        _translate.use('en'); // as default language is english                
        _router.subscribe(function (url) {
            _title.setTitle(_router.currentInstruction.component.routeName);
            _this.isShowHeaderFooter =
                (_router.currentInstruction.component.routeName != "Login"
                    && _router.currentInstruction.component.routeName != "Register"
                    && _router.currentInstruction.component.routeName != "ForgotPass");
            console.log(_this.isShowHeaderFooter);
            console.log(_router.currentInstruction.component.routeName);
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
    AppComponent.prototype.ngOnInit = function () {
        // this._translate.use('en'); // as default language is english      
        // console.log(this._router.currentInstruction.component.routeName);  
        // this._router.subscribe((url)=>{ //fires on every URL change
        //     //console.log(this._router.currentInstruction.component.routeName);
        //      this._title.setTitle(this._router.currentInstruction.component.routeName);            
        //      this.isShowHeaderFooter = 
        //         (this._router.currentInstruction.component.routeName != "Login" 
        //         && this._router.currentInstruction.component.routeName != "Register"
        //         && this._router.currentInstruction.component.routeName != "ForgotPass") 
        // });    
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
            { path: '/joblist', name: 'JobList', component: joblist_component_1.JobListComponent },
            { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
            { path: '/register', name: 'Register', component: register_component_1.RegisterComponent },
            { path: '/companylist', name: 'CompanyList', component: companylist_component_1.CompanyListComponent },
            { path: '/companymanage', name: 'CompanyManage', component: companymanage_component_1.CompanyManageComponent },
            { path: '/resumelist', name: 'ResumeList', component: resumelist_component_1.ResumeListComponent },
            { path: '/resumemanage', name: 'ResumeManage', component: resumemanage_component_1.ResumeManageComponent },
            { path: '/forgotpass', name: 'ForgotPass', component: userforgetpass_component_1.UserForgetPassComponent },
        ]), 
        __metadata('design:paramtypes', [ng2_translate_1.TranslateService, router_deprecated_1.Router, platform_browser_1.Title])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map