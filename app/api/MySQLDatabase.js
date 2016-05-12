System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express, MySQLDatabase;
    return {
        setters:[],
        execute: function() {
            express = require("mysql");
            MySQLDatabase = (function () {
                function MySQLDatabase() {
                }
                return MySQLDatabase;
            }());
            exports_1("MySQLDatabase", MySQLDatabase);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlTUUxEYXRhYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk15U1FMRGF0YWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1FBQ0ksT0FBTzs7OztZQUFQLE9BQU8sR0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbkM7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkFBRCxvQkFBQztZQUFELENBQUMsQUFERCxJQUNDO1lBREQseUNBQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIHJlcXVpcmU6IGFueVxyXG52YXIgZXhwcmVzczphbnkgPSByZXF1aXJlKFwibXlzcWxcIik7XHJcblxyXG5leHBvcnQgY2xhc3MgTXlTUUxEYXRhYmFzZSB7ICAgICAgICAgICAgICAgIFxyXG59Il19