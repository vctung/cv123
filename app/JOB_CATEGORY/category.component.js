System.register(['angular2/core', '../JOB_CATEGORY/category.service', './category-language-filter'], function(exports_1, context_1) {
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
    var core_1, category_service_1, category_language_filter_1;
    var CategoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            },
            function (category_language_filter_1_1) {
                category_language_filter_1 = category_language_filter_1_1;
            }],
        execute: function() {
            CategoryComponent = (function () {
                function CategoryComponent(_categoryService) {
                    this._categoryService = _categoryService;
                }
                CategoryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._categoryService.getPopularCategories()
                        .subscribe(function (jobCategories) { return _this.jobCategories = jobCategories; }, function (error) { return _this.errorMessage = error; });
                };
                CategoryComponent = __decorate([
                    core_1.Component({
                        selector: 'job_category',
                        templateUrl: './JOB_CATEGORY/category.component.html',
                        providers: [category_service_1.CategoryService],
                        pipes: [category_language_filter_1.CategoryLanguagePipe]
                    }), 
                    __metadata('design:paramtypes', [category_service_1.CategoryService])
                ], CategoryComponent);
                return CategoryComponent;
            }());
            exports_1("CategoryComponent", CategoryComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2F0ZWdvcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBSUksMkJBQW9CLGdCQUFpQztvQkFBakMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtnQkFFckQsQ0FBQztnQkFFRCxvQ0FBUSxHQUFSO29CQUFBLGlCQUlDO29CQUhHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsRUFBRTt5QkFDM0MsU0FBUyxDQUFDLFVBQUEsYUFBYSxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLEVBQWxDLENBQWtDLEVBQ25ELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQUMsQ0FBQztnQkFDeEQsQ0FBQztnQkFsQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsV0FBVyxFQUFFLHdDQUF3Qzt3QkFDckQsU0FBUyxFQUFFLENBQUUsa0NBQWUsQ0FBRTt3QkFDOUIsS0FBSyxFQUFFLENBQUMsK0NBQW9CLENBQUM7cUJBQ2hDLENBQUM7O3FDQUFBO2dCQWNGLHdCQUFDO1lBQUQsQ0FBQyxBQWJELElBYUM7WUFiRCxpREFhQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgQ2F0ZWdvcnlTZXJ2aWNlIH0gZnJvbSAnLi4vSk9CX0NBVEVHT1JZL2NhdGVnb3J5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJUG9wdWxhckNhdGVnb3J5IH0gZnJvbSAnLi9wb3B1bGFyY2F0ZWdvcnknO1xyXG5pbXBvcnQgeyBDYXRlZ29yeUxhbmd1YWdlUGlwZSB9IGZyb20gJy4vY2F0ZWdvcnktbGFuZ3VhZ2UtZmlsdGVyJztcclxuXHJcbkBDb21wb25lbnQoeyAgIFxyXG4gICAgc2VsZWN0b3I6ICdqb2JfY2F0ZWdvcnknLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL0pPQl9DQVRFR09SWS9jYXRlZ29yeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFsgQ2F0ZWdvcnlTZXJ2aWNlIF0sXHJcbiAgICBwaXBlczogW0NhdGVnb3J5TGFuZ3VhZ2VQaXBlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgam9iQ2F0ZWdvcmllczogSVBvcHVsYXJDYXRlZ29yeVtdO1xyXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NhdGVnb3J5U2VydmljZTogQ2F0ZWdvcnlTZXJ2aWNlKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7ICAgICAgXHJcbiAgICAgICAgdGhpcy5fY2F0ZWdvcnlTZXJ2aWNlLmdldFBvcHVsYXJDYXRlZ29yaWVzKClcclxuICAgICAgICAuc3Vic2NyaWJlKGpvYkNhdGVnb3JpZXMgPT4gdGhpcy5qb2JDYXRlZ29yaWVzID0gam9iQ2F0ZWdvcmllcyxcclxuICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7ICAgICAgICBcclxuICAgIH1cclxufSJdfQ==