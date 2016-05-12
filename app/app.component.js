System.register(['angular2/core', 'angular2/http', 'angular2/platform/browser', 'rxjs/Rx', 'angular2/router', './Home/home.component', './Product/product.component', './Shared/nav.component', './Shared/footer.component'], function(exports_1, context_1) {
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
    var core_1, http_1, browser_1, router_1, home_component_1, product_component_1, nav_component_1, footer_component_1;
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
            },
            function (product_component_1_1) {
                product_component_1 = product_component_1_1;
            },
            function (nav_component_1_1) {
                nav_component_1 = nav_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_router, _title) {
                    var _this = this;
                    this._router = _router;
                    this._title = _title;
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
                        directives: [router_1.ROUTER_DIRECTIVES, nav_component_1.NavComponent, footer_component_1.FooterComponent],
                        providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, browser_1.Title]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/product', name: 'Product', component: product_component_1.ProductComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, browser_1.Title])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO2dCQUNJLHNCQUFvQixPQUFjLEVBQVUsTUFBWTtvQkFENUQsaUJBZUM7b0JBZHVCLFlBQU8sR0FBUCxPQUFPLENBQU87b0JBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBTTtvQkFDckQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7d0JBQ25CLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxDQUFDLENBQUMsQ0FBQztnQkFDTixDQUFDO2dCQUVELHNDQUFlLEdBQWYsVUFBZ0IsR0FBVztvQkFDdkIsTUFBTSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQzt3QkFDUixLQUFLLE1BQU07NEJBQ1AsTUFBTSxDQUFDLE1BQU0sQ0FBQzt3QkFDbEI7NEJBQ0ksTUFBTSxDQUFDLG1CQUFtQixDQUFDO29CQUNuQyxDQUFDO2dCQUNMLENBQUM7Z0JBeEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7d0JBQ2pDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLDRCQUFZLEVBQUUsa0NBQWUsQ0FBQzt3QkFDOUQsU0FBUyxFQUFFLENBQUUscUJBQWMsRUFBRSx5QkFBZ0IsRUFBRSxlQUFLLENBQUM7cUJBQ3hELENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO3dCQUM3RSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7cUJBQ3JFLENBQUM7O2dDQUFBO2dCQWdCRixtQkFBQztZQUFELENBQUMsQUFmRCxJQWVDO1lBZkQsdUNBZUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHsgUk9VVEVSX1BST1ZJREVSUywgUm91dGVyLCBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vSG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2R1Y3RDb21wb25lbnQgfSBmcm9tICcuL1Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYXZDb21wb25lbnQgfSBmcm9tICcuL1NoYXJlZC9uYXYuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9TaGFyZWQvZm9vdGVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY3YtYXBwJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJywgICAgICAgXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIE5hdkNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogWyBIVFRQX1BST1ZJREVSUywgUk9VVEVSX1BST1ZJREVSUywgVGl0bGVdXHJcbn0pXHJcbkBSb3V0ZUNvbmZpZyhbXHJcbiAgICB7IHBhdGg6ICcvaG9tZScsIG5hbWU6ICdIb21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWUgfSxcclxuICAgIHsgcGF0aDogJy9wcm9kdWN0JywgbmFtZTogJ1Byb2R1Y3QnLCBjb21wb25lbnQ6IFByb2R1Y3RDb21wb25lbnQgfSAgICBcclxuXSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7ICAgICAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIsIHByaXZhdGUgX3RpdGxlOlRpdGxlKSB7XHJcbiAgICAgICBfcm91dGVyLnN1YnNjcmliZSgodXJsKT0+eyAvL2ZpcmVzIG9uIGV2ZXJ5IFVSTCBjaGFuZ2VcclxuICAgICAgICAgIF90aXRsZS5zZXRUaXRsZSh0aGlzLmdldFRpdGxlRnJvbVVybCh1cmwpKTtcclxuICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRUaXRsZUZyb21VcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcgeyAgICAgICBcclxuICAgICAgICBzd2l0Y2godXJsKXtcclxuICAgICAgICAgICAgY2FzZSBcImhvbWVcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIkhvbWVcIjtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIkN1cnJpY3VsdW0gVml0YXRlXCI7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0=