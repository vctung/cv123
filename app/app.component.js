System.register(['angular2/core', 'angular2/http', 'angular2/platform/browser', 'rxjs/Rx', 'angular2/router', './Home/home.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, browser_1, router_1, home_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router, _title) {
                    var _this = this;
                    this._router = _router;
                    this._title = _title;
                    this.pageTitle = "Curriculum Vitate";
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
                        templateUrl: 'app.component.html',
                        styleUrls: ['app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, browser_1.Title]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, browser_1.Title])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO2dCQUdJLHNCQUFvQixPQUFjLEVBQVUsTUFBWTtvQkFINUQsaUJBaUJDO29CQWR1QixZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLFdBQU0sR0FBTixNQUFNLENBQU07b0JBRnhELGNBQVMsR0FBVyxtQkFBbUIsQ0FBQztvQkFHckMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7d0JBQ25CLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxDQUFDLENBQUMsQ0FBQztnQkFDTixDQUFDO2dCQUVELHNDQUFlLEdBQWYsVUFBZ0IsR0FBVztvQkFDdkIsTUFBTSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQzt3QkFDUixLQUFLLE1BQU07NEJBQ1AsTUFBTSxDQUFDLE1BQU0sQ0FBQzt3QkFDbEI7NEJBQ0ksTUFBTSxDQUFDLG1CQUFtQixDQUFDO29CQUNuQyxDQUFDO2dCQUNMLENBQUM7Z0JBMUJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7d0JBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO3dCQUNoQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsU0FBUyxFQUFFLENBQUUscUJBQWMsRUFBRSx5QkFBZ0IsRUFBRSxlQUFLLENBQUM7cUJBQ3hELENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO3FCQUNoRixDQUFDOztnQ0FBQTtnQkFrQkYsbUJBQUM7WUFBRCxDQUFDLEFBakJELElBaUJDO1lBakJELHVDQWlCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBIVFRQX1BST1ZJREVSUyB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBST1VURVJfUFJPVklERVJTLCBSb3V0ZXIsIFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9Ib21lL2hvbWUuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjdi1hcHAnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2FwcC5jb21wb25lbnQuY3NzJ10sICAgXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbIEhUVFBfUFJPVklERVJTLCBST1VURVJfUFJPVklERVJTLCBUaXRsZV1cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHsgcGF0aDogJy9ob21lJywgbmFtZTogJ0hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LCAgICBcclxuXSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICBwYWdlVGl0bGU6IHN0cmluZyA9IFwiQ3VycmljdWx1bSBWaXRhdGVcIjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOlJvdXRlciwgcHJpdmF0ZSBfdGl0bGU6VGl0bGUpIHtcclxuICAgICAgIF9yb3V0ZXIuc3Vic2NyaWJlKCh1cmwpPT57IC8vZmlyZXMgb24gZXZlcnkgVVJMIGNoYW5nZVxyXG4gICAgICAgICAgX3RpdGxlLnNldFRpdGxlKHRoaXMuZ2V0VGl0bGVGcm9tVXJsKHVybCkpO1xyXG4gICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFRpdGxlRnJvbVVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7ICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCh1cmwpe1xyXG4gICAgICAgICAgICBjYXNlIFwiaG9tZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSG9tZVwiO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQ3VycmljdWx1bSBWaXRhdGVcIjtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufSJdfQ==