System.register(['angular2/core', 'angular2/http', 'angular2/platform/browser', 'rxjs/Rx', 'angular2/router', './Home/home.component', './Product/product.component'], function(exports_1, context_1) {
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
    var core_1, http_1, browser_1, router_1, home_component_1, product_component_1;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUdJLHNCQUFvQixPQUFjLEVBQVUsTUFBWTtvQkFINUQsaUJBaUJDO29CQWR1QixZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFVLFdBQU0sR0FBTixNQUFNLENBQU07b0JBRnhELGNBQVMsR0FBVyxtQkFBbUIsQ0FBQztvQkFHckMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7d0JBQ25CLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxDQUFDLENBQUMsQ0FBQztnQkFDTixDQUFDO2dCQUVELHNDQUFlLEdBQWYsVUFBZ0IsR0FBVztvQkFDdkIsTUFBTSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQzt3QkFDUixLQUFLLE1BQU07NEJBQ1AsTUFBTSxDQUFDLE1BQU0sQ0FBQzt3QkFDbEI7NEJBQ0ksTUFBTSxDQUFDLG1CQUFtQixDQUFDO29CQUNuQyxDQUFDO2dCQUNMLENBQUM7Z0JBM0JMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7d0JBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO3dCQUNoQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsU0FBUyxFQUFFLENBQUUscUJBQWMsRUFBRSx5QkFBZ0IsRUFBRSxlQUFLLENBQUM7cUJBQ3hELENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFO3dCQUM3RSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7cUJBQ3JFLENBQUM7O2dDQUFBO2dCQWtCRixtQkFBQztZQUFELENBQUMsQUFqQkQsSUFpQkM7WUFqQkQsdUNBaUJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEhUVFBfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7IFJPVVRFUl9QUk9WSURFUlMsIFJvdXRlciwgUm91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL0hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9kdWN0Q29tcG9uZW50IH0gZnJvbSAnLi9Qcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjdi1hcHAnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2FwcC5jb21wb25lbnQuY3NzJ10sICAgXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbIEhUVFBfUFJPVklERVJTLCBST1VURVJfUFJPVklERVJTLCBUaXRsZV1cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHsgcGF0aDogJy9ob21lJywgbmFtZTogJ0hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZSB9LFxyXG4gICAgeyBwYXRoOiAnL3Byb2R1Y3QnLCBuYW1lOiAnUHJvZHVjdCcsIGNvbXBvbmVudDogUHJvZHVjdENvbXBvbmVudCB9ICAgIFxyXG5dKVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICAgIHBhZ2VUaXRsZTogc3RyaW5nID0gXCJDdXJyaWN1bHVtIFZpdGF0ZVwiO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6Um91dGVyLCBwcml2YXRlIF90aXRsZTpUaXRsZSkge1xyXG4gICAgICAgX3JvdXRlci5zdWJzY3JpYmUoKHVybCk9PnsgLy9maXJlcyBvbiBldmVyeSBVUkwgY2hhbmdlXHJcbiAgICAgICAgICBfdGl0bGUuc2V0VGl0bGUodGhpcy5nZXRUaXRsZUZyb21VcmwodXJsKSk7XHJcbiAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0VGl0bGVGcm9tVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHsgICAgICAgXHJcbiAgICAgICAgc3dpdGNoKHVybCl7XHJcbiAgICAgICAgICAgIGNhc2UgXCJob21lXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJIb21lXCI7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJDdXJyaWN1bHVtIFZpdGF0ZVwiO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG59Il19