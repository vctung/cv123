System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var CategoryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            CategoryService = (function () {
                function CategoryService(_http) {
                    this._http = _http;
                }
                CategoryService.prototype.getPopularCategories = function () {
                    var _popularCatUrl = "/api/popularcategories";
                    return this._http.get(_popularCatUrl)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                // getProducts(): Observable<IProduct[]> {
                //     return this._http.get(this._productUrl)
                //     .map((response: Response) => <IProduct[]> response.json())
                //     .do(data => console.log("All " + JSON.stringify(data)))
                //     .catch(this.handleError);        
                // }   
                CategoryService.prototype.handleError = function (error) {
                    console.log(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                CategoryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CategoryService);
                return CategoryService;
            }());
            exports_1("CategoryService", CategoryService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGVnb3J5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFFSSx5QkFBb0IsS0FBVztvQkFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO2dCQUFJLENBQUM7Z0JBRXBDLDhDQUFvQixHQUFwQjtvQkFDSSxJQUFJLGNBQWMsR0FBVyx3QkFBd0IsQ0FBQztvQkFFdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQzt5QkFDaEMsR0FBRyxDQUFDLFVBQUMsUUFBa0IsSUFBSyxPQUFxQixRQUFRLENBQUMsSUFBSSxFQUFFLEVBQXBDLENBQW9DLENBQUM7eUJBRWpFLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBQ0QsMENBQTBDO2dCQUMxQyw4Q0FBOEM7Z0JBQzlDLGlFQUFpRTtnQkFDakUsOERBQThEO2dCQUM5RCx3Q0FBd0M7Z0JBQ3hDLE9BQU87Z0JBRUMscUNBQVcsR0FBbkIsVUFBb0IsS0FBZTtvQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFbkIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBeEJMO29CQUFDLGlCQUFVLEVBQUU7O21DQUFBO2dCQXlCYixzQkFBQztZQUFELENBQUMsQUF4QkQsSUF3QkM7WUF4QkQsNkNBd0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBJUG9wdWxhckNhdGVnb3J5IH0gZnJvbSAnLi9wb3B1bGFyY2F0ZWdvcnknO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBnZXRQb3B1bGFyQ2F0ZWdvcmllcygpOiBPYnNlcnZhYmxlPElQb3B1bGFyQ2F0ZWdvcnlbXT4ge1xyXG4gICAgICAgIHZhciBfcG9wdWxhckNhdFVybDogc3RyaW5nID0gXCIvYXBpL3BvcHVsYXJjYXRlZ29yaWVzXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KF9wb3B1bGFyQ2F0VXJsKVxyXG4gICAgICAgICAgICAubWFwKChyZXNwb25zZTogUmVzcG9uc2UpID0+IDxJUG9wdWxhckNhdGVnb3J5W10+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgIC8vICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZyhcIkFsbCBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpOyBcclxuICAgIH1cclxuICAgIC8vIGdldFByb2R1Y3RzKCk6IE9ic2VydmFibGU8SVByb2R1Y3RbXT4ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLl9odHRwLmdldCh0aGlzLl9wcm9kdWN0VXJsKVxyXG4gICAgLy8gICAgIC5tYXAoKHJlc3BvbnNlOiBSZXNwb25zZSkgPT4gPElQcm9kdWN0W10+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC8vICAgICAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZyhcIkFsbCBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKSlcclxuICAgIC8vICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7ICAgICAgICBcclxuICAgIC8vIH0gICBcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogUmVzcG9uc2Upe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xyXG4gICAgfVxyXG59Il19