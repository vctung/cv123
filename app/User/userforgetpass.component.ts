import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    moduleId: module.id,    
    templateUrl: 'userforgetpass.component.html',
    directives: [ ROUTER_DIRECTIVES ]
})
export class UserForgetPassComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}