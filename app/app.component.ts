import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import 'rxjs/Rx';
import { RouteConfig, ROUTER_DIRECTIVES, Router, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HomeComponent } from './Home/home.component';
import { NavComponent } from './Shared/nav.component';
import { FooterComponent } from './Shared/footer.component';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

/*** Company Part***/
import { CompanyListComponent } from './Company/companylist.component';
import { CompanyManageComponent } from './Company/companymanage.component';
/*** End Company Part***/

/*** Resume Part***/
import { ResumeListComponent } from './Resume/resumelist.component';
import { ResumeManageComponent } from './Resume/resumemanage.component'; 
/*** End Resume Part */

/*** Job Part ***/
import { JobListComponent } from './Job/joblist.component';
/*** End Job Part */

/*** User Part ***/
import { LoginComponent } from './User/login.component';
import { RegisterComponent } from './User/register.component';
import { UserForgetPassComponent } from './User/userforgetpass.component';
/*** End User Part */


@Component({
    selector: 'cv-app',
    templateUrl: 'app/app.component.html',       
    directives: [ROUTER_DIRECTIVES, NavComponent, FooterComponent],
    providers: [ ROUTER_PROVIDERS, Title],
    pipes: [ TranslatePipe ]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/joblist', name: 'JobList', component: JobListComponent },
    { path: '/login', name: 'Login', component: LoginComponent},
    { path: '/register', name: 'Register', component: RegisterComponent },
    { path: '/companylist', name: 'CompanyList', component: CompanyListComponent },
    { path: '/companymanage', name: 'CompanyManage', component: CompanyManageComponent },    
    { path: '/resumelist', name: 'ResumeList', component: ResumeListComponent },
    { path: '/resumemanage', name: 'ResumeManage', component: ResumeManageComponent },
    { path: '/forgotpass', name: 'ForgotPass', component: UserForgetPassComponent },
])
export class AppComponent implements OnInit {
    isShowHeaderFooter: boolean = true;
      
    constructor(private _translate: TranslateService, private _router:Router, private _title:Title) {               
        _translate.use('en'); // as default language is english                
        _router.subscribe((url)=>{ //fires on every URL change            
             _title.setTitle( _router.currentInstruction.component.routeName);            
             this.isShowHeaderFooter = 
                (_router.currentInstruction.component.routeName != "Login" 
                && _router.currentInstruction.component.routeName != "Register"
                && _router.currentInstruction.component.routeName != "ForgotPass") 
            
            console.log(this.isShowHeaderFooter);    
            console.log( _router.currentInstruction.component.routeName);                
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
    
    ngOnInit() {
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
    }
}