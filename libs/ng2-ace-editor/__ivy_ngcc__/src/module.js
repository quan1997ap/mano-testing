import * as ɵngcc0 from '@angular/core';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { AceEditorComponent } from "./component";
import { AceEditorDirective } from "./directive";
var list = [
    AceEditorComponent,
    AceEditorDirective
];
var AceEditorModule = /** @class */ (function () {
    function AceEditorModule() {
    }
AceEditorModule.ngModuleDef = ɵngcc0.ɵɵdefineNgModule({ type: AceEditorModule });
AceEditorModule.ngInjectorDef = ɵngcc0.ɵɵdefineInjector({ factory: function AceEditorModule_Factory(t) { return new (t || AceEditorModule)(); }, providers: [], imports: [[]] });
/*@__PURE__*/ ɵngcc0.ɵɵsetNgModuleScope(AceEditorModule, { declarations: [AceEditorComponent,
        AceEditorDirective], exports: [AceEditorComponent,
        AceEditorDirective] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(AceEditorModule, [{
        type: NgModule,
        args: [{
                declarations: list.slice(),
                imports: [],
                providers: [],
                exports: list
            }]
    }], function () { return []; }, null);
    return AceEditorModule;
}());
export { AceEditorModule };

//# sourceMappingURL=module.js.map