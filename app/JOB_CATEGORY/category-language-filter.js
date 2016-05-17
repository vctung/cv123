System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var CategoryLanguagePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CategoryLanguagePipe = (function () {
                function CategoryLanguagePipe() {
                }
                CategoryLanguagePipe.prototype.transform = function (value, args) {
                    // let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
                    //  return filter ? value.filter((category: IPopularCategory) => 
                    // category.language_id == 1) : value;
                    return value.filter(function (category) {
                        return category.language_id == 1;
                    });
                };
                CategoryLanguagePipe = __decorate([
                    core_1.Pipe({
                        name: 'categoryFilter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CategoryLanguagePipe);
                return CategoryLanguagePipe;
            }());
            exports_1("CategoryLanguagePipe", CategoryLanguagePipe);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbGFuZ3VhZ2UtZmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2F0ZWdvcnktbGFuZ3VhZ2UtZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQUE7Z0JBU0EsQ0FBQztnQkFSRyx3Q0FBUyxHQUFULFVBQVUsS0FBeUIsRUFBRSxJQUFjO29CQUNoRCxxRUFBcUU7b0JBRXRFLGlFQUFpRTtvQkFDNUQsc0NBQXNDO29CQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQTBCO3dCQUM1QyxPQUFBLFFBQVEsQ0FBQyxXQUFXLElBQUksQ0FBQztvQkFBekIsQ0FBeUIsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQVpMO29CQUFDLFdBQUksQ0FBQzt3QkFDRixJQUFJLEVBQUUsZ0JBQWdCO3FCQUN6QixDQUFDOzt3Q0FBQTtnQkFXRiwyQkFBQztZQUFELENBQUMsQUFURCxJQVNDO1lBVEQsdURBU0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHsgSVBvcHVsYXJDYXRlZ29yeSB9IGZyb20gJy4vcG9wdWxhcmNhdGVnb3J5JztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdjYXRlZ29yeUZpbHRlcidcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeUxhbmd1YWdlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBJUG9wdWxhckNhdGVnb3J5W10sIGFyZ3M6IHN0cmluZ1tdKTogSVBvcHVsYXJDYXRlZ29yeVtdIHtcclxuICAgICAgIC8vIGxldCBmaWx0ZXI6IHN0cmluZyA9IGFyZ3NbMF0gPyBhcmdzWzBdLnRvTG9jYWxlTG93ZXJDYXNlKCkgOiBudWxsO1xyXG4gICAgICAgICBcclxuICAgICAgLy8gIHJldHVybiBmaWx0ZXIgPyB2YWx1ZS5maWx0ZXIoKGNhdGVnb3J5OiBJUG9wdWxhckNhdGVnb3J5KSA9PiBcclxuICAgICAgICAgICAvLyBjYXRlZ29yeS5sYW5ndWFnZV9pZCA9PSAxKSA6IHZhbHVlO1xyXG4gICAgICAgICByZXR1cm4gdmFsdWUuZmlsdGVyKChjYXRlZ29yeTogSVBvcHVsYXJDYXRlZ29yeSkgPT4gXHJcbiAgICAgICAgICAgIGNhdGVnb3J5Lmxhbmd1YWdlX2lkID09IDEpO1xyXG4gICAgfVxyXG59Il19