import { Component, Injectable, provide} from '@angular/core';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {bootstrap} from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { Http, HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    provide(TranslateLoader, {
        useFactory: (http: Http) => new TranslateStaticLoader(http, 'Assets/languages', '.json'),
        deps: [Http]
    }),
    provide('window', { useValue: window }),
    // use TranslateService here, and not TRANSLATE_PROVIDERS (which will define a default TranslateStaticLoader)
    TranslateService
]);
