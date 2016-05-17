System.register(['angular2/core', '../JOB_CATEGORY/category.component'], function(exports_1, context_1) {
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
    var core_1, category_component_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (category_component_1_1) {
                category_component_1 = category_component_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                    //  this._productService.getProducts()
                    //     .subscribe(products => this.products = products,
                    //                error => this.errorMessage = <any>error);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: './Home/home.component.html',
                        directives: [category_component_1.CategoryComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUNJO2dCQUVBLENBQUM7Z0JBRUQsZ0NBQVEsR0FBUjtvQkFDSSxzQ0FBc0M7b0JBQ3RDLHVEQUF1RDtvQkFDdkQsMkRBQTJEO2dCQUMvRCxDQUFDO2dCQWJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLDRCQUE0Qjt3QkFDekMsVUFBVSxFQUFFLENBQUUsc0NBQWlCLENBQUU7cUJBQ3BDLENBQUM7O2lDQUFBO2dCQVdGLG9CQUFDO1lBQUQsQ0FBQyxBQVZELElBVUM7WUFWRCx5Q0FVQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgQ2F0ZWdvcnlDb21wb25lbnQgfSBmcm9tICcuLi9KT0JfQ0FURUdPUlkvY2F0ZWdvcnkuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoeyAgIFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL0hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbIENhdGVnb3J5Q29tcG9uZW50IF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7ICAgICAgXHJcbiAgICAgICAgLy8gIHRoaXMuX3Byb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RzKClcclxuICAgICAgICAvLyAgICAgLnN1YnNjcmliZShwcm9kdWN0cyA9PiB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHMsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuICAgIH1cclxufSJdfQ==