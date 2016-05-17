System.register(['angular2/core', 'angular2/router', './lang-switcher.component'], function(exports_1, context_1) {
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
    var core_1, router_1, lang_switcher_component_1;
    var NavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (lang_switcher_component_1_1) {
                lang_switcher_component_1 = lang_switcher_component_1_1;
            }],
        execute: function() {
            NavComponent = (function () {
                function NavComponent() {
                }
                NavComponent = __decorate([
                    core_1.Component({
                        selector: 'navigation-app',
                        templateUrl: './Shared/nav.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, lang_switcher_component_1.LangSwitcherComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavComponent);
                return NavComponent;
            }());
            exports_1("NavComponent", NavComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFBQTtnQkFDQSxDQUFDO2dCQU5EO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsV0FBVyxFQUFFLDZCQUE2Qjt3QkFDMUMsVUFBVSxFQUFFLENBQUUsMEJBQWlCLEVBQUUsK0NBQXFCLENBQUU7cUJBQzNELENBQUM7O2dDQUFBO2dCQUVGLG1CQUFDO1lBQUQsQ0FBQyxBQURELElBQ0M7WUFERCx1Q0FDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7IExhbmdTd2l0Y2hlckNvbXBvbmVudCB9IGZyb20gJy4vbGFuZy1zd2l0Y2hlci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7ICAgXHJcbiAgICBzZWxlY3RvcjogJ25hdmlnYXRpb24tYXBwJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9TaGFyZWQvbmF2LmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFsgUk9VVEVSX0RJUkVDVElWRVMsIExhbmdTd2l0Y2hlckNvbXBvbmVudCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZDb21wb25lbnQgeyAgICBcclxufSJdfQ==