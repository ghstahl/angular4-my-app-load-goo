(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.goo = {}),global.ng.core,global.common,global.router));
}(this, (function (exports,core,common,router) { 'use strict';

var BooComponent = /** @class */ (function () {
    function BooComponent() {
    }
    BooComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'my-boo',
                    template: "<h1>Hello Boo</h1>"
                },] },
    ];
    /** @nocollapse */
    BooComponent.ctorParameters = function () { return []; };
    return BooComponent;
}());

var GooComponent = /** @class */ (function () {
    function GooComponent(activatedRoute) {
        if (activatedRoute && activatedRoute.routeConfig) {
            // Router.resetConfig() cannot be used here
            // because child route config in lazy module cannot be seen by using Router.
            activatedRoute.routeConfig.children = [
                {
                    path: "boo", component: BooComponent
                }
            ];
        }
    }
    GooComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'my-goo',
                    template: "\n  <h1>Hello Goo</h1>\n  <a routerLink=\"boo\">to boo</a>\n  <router-outlet></router-outlet>"
                },] },
    ];
    /** @nocollapse */
    GooComponent.ctorParameters = function () { return [
        { type: router.ActivatedRoute, },
    ]; };
    return GooComponent;
}());

var GooModule = /** @class */ (function () {
    function GooModule() {
    }
    GooModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule,
                        router.RouterModule.forChild([
                            { path: '', component: GooComponent }
                        ])
                    ],
                    declarations: [GooComponent, BooComponent],
                    entryComponents: [BooComponent]
                },] },
    ];
    /** @nocollapse */
    GooModule.ctorParameters = function () { return []; };
    return GooModule;
}());

/**
 * @module
 * @description
 * Entry point for all public APIs of the async local storage package.
 */

exports.GooModule = GooModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
