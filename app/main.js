"use strict";
var core_1 = require('@angular/core');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    core_1.provide(ng2_translate_1.TranslateLoader, {
        useFactory: function (http) { return new ng2_translate_1.TranslateStaticLoader(http, 'Assets/languages', '.json'); },
        deps: [http_1.Http]
    }),
    core_1.provide('window', { useValue: window }),
    // use TranslateService here, and not TRANSLATE_PROVIDERS (which will define a default TranslateStaticLoader)
    ng2_translate_1.TranslateService
]);
//# sourceMappingURL=main.js.map