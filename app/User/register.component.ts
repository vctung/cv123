import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({    
    moduleId: module.id,    
    templateUrl: 'register.component.html',
    directives: [ ROUTER_DIRECTIVES ]
})
export class RegisterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}