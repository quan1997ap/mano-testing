import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = [1, "ngx-json-viewer"];
const _c1 = [3, "ngClass", 4, "ngFor", "ngForOf"];
const _c2 = [3, "ngClass"];
const _c3 = [3, "ngClass", "click"];
const _c4 = ["class", "toggler", 4, "ngIf"];
const _c5 = [1, "segment-key"];
const _c6 = [1, "segment-separator"];
const _c7 = ["class", "segment-value", 4, "ngIf"];
const _c8 = ["class", "children", 4, "ngIf"];
const _c9 = [1, "toggler"];
function NgxJsonViewerComponent_section_1_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", _c9);
} }
const _c10 = [1, "segment-value"];
function NgxJsonViewerComponent_section_1_span_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", _c10);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const segment_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵselect(1);
    ɵngcc0.ɵɵtextInterpolate(segment_r1.description);
} }
const _c11 = [1, "children"];
const _c12 = [3, "json", "expanded"];
function NgxJsonViewerComponent_section_1_section_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "section", _c11);
    ɵngcc0.ɵɵelement(1, "ngx-json-viewer", _c12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const segment_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵselect(1);
    ɵngcc0.ɵɵproperty("json", segment_r1.value)("expanded", ctx_r4.expanded);
} }
const _c13 = function (a1) { return ["segment", a1]; };
const _c14 = function (a1, a2) { return { "segment-main": true, "expandable": a1, "expanded": a2 }; };
function NgxJsonViewerComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "section", _c2);
    ɵngcc0.ɵɵelementStart(1, "section", _c3);
    ɵngcc0.ɵɵlistener("click", function NgxJsonViewerComponent_section_1_Template_section_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r8); const segment_r1 = ctx.$implicit; const ctx_r7 = ɵngcc0.ɵɵnextContext(); return ctx_r7.toggle(segment_r1); });
    ɵngcc0.ɵɵtemplate(2, NgxJsonViewerComponent_section_1_div_2_Template, 1, 0, "div", _c4);
    ɵngcc0.ɵɵelementStart(3, "span", _c5);
    ɵngcc0.ɵɵtext(4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "span", _c6);
    ɵngcc0.ɵɵtext(6, ": ");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(7, NgxJsonViewerComponent_section_1_span_7_Template, 2, 1, "span", _c7);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(8, NgxJsonViewerComponent_section_1_section_8_Template, 2, 2, "section", _c8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const segment_r1 = ctx.$implicit;
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c13, "segment-type-" + segment_r1.type));
    ɵngcc0.ɵɵselect(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(8, _c14, ctx_r0.isExpandable(segment_r1), segment_r1.expanded));
    ɵngcc0.ɵɵselect(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.isExpandable(segment_r1));
    ɵngcc0.ɵɵselect(4);
    ɵngcc0.ɵɵtextInterpolate(segment_r1.key);
    ɵngcc0.ɵɵselect(7);
    ɵngcc0.ɵɵproperty("ngIf", !segment_r1.expanded || !ctx_r0.isExpandable(segment_r1));
    ɵngcc0.ɵɵselect(8);
    ɵngcc0.ɵɵproperty("ngIf", segment_r1.expanded && ctx_r0.isExpandable(segment_r1));
} }
var NgxJsonViewerComponent = /** @class */ (function () {
    function NgxJsonViewerComponent() {
        this.expanded = true;
        /**
         * @deprecated It will be always true and deleted in version 3.0.0
         */
        this.cleanOnChange = true;
        this.segments = [];
    }
    /**
     * @return {?}
     */
    NgxJsonViewerComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.cleanOnChange) {
            this.segments = [];
        }
        if (typeof this.json === 'object') {
            Object.keys(this.json).forEach(function (key) {
                _this.segments.push(_this.parseKeyValue(key, _this.json[key]));
            });
        }
        else {
            this.segments.push(this.parseKeyValue("(" + typeof this.json + ")", this.json));
        }
    };
    /**
     * @param {?} segment
     * @return {?}
     */
    NgxJsonViewerComponent.prototype.isExpandable = function (segment) {
        return segment.type === 'object' || segment.type === 'array';
    };
    /**
     * @param {?} segment
     * @return {?}
     */
    NgxJsonViewerComponent.prototype.toggle = function (segment) {
        if (this.isExpandable(segment)) {
            segment.expanded = !segment.expanded;
        }
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    NgxJsonViewerComponent.prototype.parseKeyValue = function (key, value) {
        var /** @type {?} */ segment = {
            key: key,
            value: value,
            type: undefined,
            description: '' + value,
            expanded: this.expanded
        };
        switch (typeof segment.value) {
            case 'number': {
                segment.type = 'number';
                break;
            }
            case 'boolean': {
                segment.type = 'boolean';
                break;
            }
            case 'function': {
                segment.type = 'function';
                break;
            }
            case 'string': {
                segment.type = 'string';
                segment.description = '"' + segment.value + '"';
                break;
            }
            case 'undefined': {
                segment.type = 'undefined';
                segment.description = 'undefined';
                break;
            }
            case 'object': {
                // yea, null is object
                if (segment.value === null) {
                    segment.type = 'null';
                    segment.description = 'null';
                }
                else if (Array.isArray(segment.value)) {
                    segment.type = 'array';
                    segment.description = 'Array[' + segment.value.length + '] ' + JSON.stringify(segment.value);
                }
                else if (segment.value instanceof Date) {
                    segment.type = 'date';
                }
                else {
                    segment.type = 'object';
                    segment.description = 'Object ' + JSON.stringify(segment.value);
                }
                break;
            }
        }
        return segment;
    };
NgxJsonViewerComponent.ngFactoryDef = function NgxJsonViewerComponent_Factory(t) { return new (t || NgxJsonViewerComponent)(); };
NgxJsonViewerComponent.ngComponentDef = ɵngcc0.ɵɵdefineComponent({ type: NgxJsonViewerComponent, selectors: [["ngx-json-viewer"]], inputs: { expanded: "expanded", cleanOnChange: "cleanOnChange", json: "json" }, features: [ɵngcc0.ɵɵNgOnChangesFeature()], consts: 2, vars: 1, template: function NgxJsonViewerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "section", _c0);
        ɵngcc0.ɵɵtemplate(1, NgxJsonViewerComponent_section_1_Template, 9, 11, "section", _c1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵselect(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.segments);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc1.NgClass, ɵngcc1.NgIf, NgxJsonViewerComponent], styles: ["@charset \"UTF-8\";\n    .ngx-json-viewer[_ngcontent-%COMP%] {\n      font-family: monospace;\n      font-size: 1em;\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n      position: relative; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%] {\n        padding: 2px;\n        margin: 1px 1px 1px 12px; }\n        .ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%] {\n          word-wrap: break-word; }\n          .ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%] {\n            position: absolute;\n            margin-left: -14px;\n            margin-top: 3px;\n            font-size: .8em;\n            line-height: 1.2em;\n            vertical-align: middle;\n            color: #787878; }\n            .ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]::after {\n              display: inline-block;\n              content: \"\u25BA\";\n              -webkit-transition: -webkit-transform 0.1s ease-in;\n              transition: -webkit-transform 0.1s ease-in;\n              transition: transform 0.1s ease-in;\n              transition: transform 0.1s ease-in, -webkit-transform 0.1s ease-in; }\n          .ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-key[_ngcontent-%COMP%] {\n            color: #4E187C; }\n          .ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-separator[_ngcontent-%COMP%] {\n            color: #999; }\n          .ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-value[_ngcontent-%COMP%] {\n            color: #000; }\n        .ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .children[_ngcontent-%COMP%] {\n          margin-left: 12px; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-string[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        color: #FF6B6B; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-number[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        color: #009688; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-boolean[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        color: #b938a4; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-date[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        color: #05668D; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-array[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        color: #999; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-object[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        color: #999; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-function[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        color: #999; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-null[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        color: #fff; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        color: #fff; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-null[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        background-color: red; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-key[_ngcontent-%COMP%] {\n        color: #999; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%]    > .segment-value[_ngcontent-%COMP%] {\n        background-color: #999; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-object[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%], .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-array[_ngcontent-%COMP%]    > .segment-main[_ngcontent-%COMP%] {\n        white-space: nowrap; }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .expanded[_ngcontent-%COMP%]    > .toggler[_ngcontent-%COMP%]::after {\n        -webkit-transform: rotate(90deg);\n                transform: rotate(90deg); }\n      .ngx-json-viewer[_ngcontent-%COMP%]   .expandable[_ngcontent-%COMP%], .ngx-json-viewer[_ngcontent-%COMP%]   .expandable[_ngcontent-%COMP%]    > .toggler[_ngcontent-%COMP%] {\n        cursor: pointer; }"] });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(NgxJsonViewerComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-json-viewer',
                template: "\n    <section class=\"ngx-json-viewer\">\n      <section\n        *ngFor=\"let segment of segments\"\n        [ngClass]=\"['segment', 'segment-type-' + segment.type]\">\n        <section\n          (click)=\"toggle(segment)\"\n          [ngClass]=\"{\n            'segment-main': true,\n            'expandable': isExpandable(segment),\n            'expanded': segment.expanded\n          }\">\n          <div *ngIf=\"isExpandable(segment)\" class=\"toggler\"></div>\n          <span class=\"segment-key\">{{ segment.key }}</span>\n          <span class=\"segment-separator\">: </span>\n          <span *ngIf=\"!segment.expanded || !isExpandable(segment)\" class=\"segment-value\">{{ segment.description }}</span>\n        </section>\n        <section *ngIf=\"segment.expanded && isExpandable(segment)\" class=\"children\">\n          <ngx-json-viewer [json]=\"segment.value\" [expanded]=\"expanded\"></ngx-json-viewer>\n        </section>\n      </section>\n    </section>\n  ",
                styles: ["\n    @charset \"UTF-8\";\n    .ngx-json-viewer {\n      font-family: monospace;\n      font-size: 1em;\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n      position: relative; }\n      .ngx-json-viewer .segment {\n        padding: 2px;\n        margin: 1px 1px 1px 12px; }\n        .ngx-json-viewer .segment .segment-main {\n          word-wrap: break-word; }\n          .ngx-json-viewer .segment .segment-main .toggler {\n            position: absolute;\n            margin-left: -14px;\n            margin-top: 3px;\n            font-size: .8em;\n            line-height: 1.2em;\n            vertical-align: middle;\n            color: #787878; }\n            .ngx-json-viewer .segment .segment-main .toggler::after {\n              display: inline-block;\n              content: \"\u25BA\";\n              -webkit-transition: -webkit-transform 0.1s ease-in;\n              transition: -webkit-transform 0.1s ease-in;\n              transition: transform 0.1s ease-in;\n              transition: transform 0.1s ease-in, -webkit-transform 0.1s ease-in; }\n          .ngx-json-viewer .segment .segment-main .segment-key {\n            color: #4E187C; }\n          .ngx-json-viewer .segment .segment-main .segment-separator {\n            color: #999; }\n          .ngx-json-viewer .segment .segment-main .segment-value {\n            color: #000; }\n        .ngx-json-viewer .segment .children {\n          margin-left: 12px; }\n      .ngx-json-viewer .segment-type-string > .segment-main > .segment-value {\n        color: #FF6B6B; }\n      .ngx-json-viewer .segment-type-number > .segment-main > .segment-value {\n        color: #009688; }\n      .ngx-json-viewer .segment-type-boolean > .segment-main > .segment-value {\n        color: #b938a4; }\n      .ngx-json-viewer .segment-type-date > .segment-main > .segment-value {\n        color: #05668D; }\n      .ngx-json-viewer .segment-type-array > .segment-main > .segment-value {\n        color: #999; }\n      .ngx-json-viewer .segment-type-object > .segment-main > .segment-value {\n        color: #999; }\n      .ngx-json-viewer .segment-type-function > .segment-main > .segment-value {\n        color: #999; }\n      .ngx-json-viewer .segment-type-null > .segment-main > .segment-value {\n        color: #fff; }\n      .ngx-json-viewer .segment-type-undefined > .segment-main > .segment-value {\n        color: #fff; }\n      .ngx-json-viewer .segment-type-null > .segment-main > .segment-value {\n        background-color: red; }\n      .ngx-json-viewer .segment-type-undefined > .segment-main > .segment-key {\n        color: #999; }\n      .ngx-json-viewer .segment-type-undefined > .segment-main > .segment-value {\n        background-color: #999; }\n      .ngx-json-viewer .segment-type-object > .segment-main,\n      .ngx-json-viewer .segment-type-array > .segment-main {\n        white-space: nowrap; }\n      .ngx-json-viewer .expanded > .toggler::after {\n        -webkit-transform: rotate(90deg);\n                transform: rotate(90deg); }\n      .ngx-json-viewer .expandable,\n      .ngx-json-viewer .expandable > .toggler {\n        cursor: pointer; }\n  "]
            }]
    }], function () { return []; }, { expanded: [{
            type: Input
        }], cleanOnChange: [{
            type: Input
        }], segments: [], ngOnChanges: [], isExpandable: [], toggle: [], parseKeyValue: [], json: [{
            type: Input
        }] });
    return NgxJsonViewerComponent;
}());
/**
 * @nocollapse
 */
NgxJsonViewerComponent.ctorParameters = function () { return []; };
NgxJsonViewerComponent.propDecorators = {
    'json': [{ type: Input },],
    'expanded': [{ type: Input },],
    'cleanOnChange': [{ type: Input },],
};
var NgxJsonViewerModule = /** @class */ (function () {
    function NgxJsonViewerModule() {
    }
NgxJsonViewerModule.ngModuleDef = ɵngcc0.ɵɵdefineNgModule({ type: NgxJsonViewerModule });
NgxJsonViewerModule.ngInjectorDef = ɵngcc0.ɵɵdefineInjector({ factory: function NgxJsonViewerModule_Factory(t) { return new (t || NgxJsonViewerModule)(); }, imports: [[
            CommonModule
        ]] });
/*@__PURE__*/ ɵngcc0.ɵɵsetNgModuleScope(NgxJsonViewerModule, { declarations: function () { return [NgxJsonViewerComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NgxJsonViewerComponent]; } });
/*@__PURE__*/ ɵngcc0.ɵsetClassMetadata(NgxJsonViewerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    NgxJsonViewerComponent
                ],
                exports: [
                    NgxJsonViewerComponent
                ]
            }]
    }], function () { return []; }, null);
    return NgxJsonViewerModule;
}());
/**
 * @nocollapse
 */
NgxJsonViewerModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { NgxJsonViewerModule, NgxJsonViewerComponent };

//# sourceMappingURL=ngx-json-viewer.es5.js.map