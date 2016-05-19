import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    moduleId: module.id,    
    templateUrl: 'login.component.html',
    directives: [ ROUTER_DIRECTIVES ]
})
export class LoginComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}