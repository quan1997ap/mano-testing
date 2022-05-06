import { __decorate, __metadata, __param } from 'tslib';
import { ElementRef, Optional, Inject, Input, Directive, NgModule } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgModel, FormsModule } from '@angular/forms';

var HighlightJsDirective = /** @class */ (function () {
    function HighlightJsDirective(el, ngModel, doc) {
        this.el = el;
        this.ngModel = ngModel;
        this.doc = doc;
        this.lang = 'html';
    }
    HighlightJsDirective.prototype.escapeHTML = function (str) {
        return (str || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
    };
    HighlightJsDirective.prototype.init = function () {
        this.destroy();
        this.codeEl = this.doc.createElement('pre');
        if (this.lang) {
            this.codeEl.className = this.lang;
        }
        this.codeEl.innerHTML =
            this.code || '' + this.el.nativeElement.innerHTML.trim();
        this.parentEl = this.el.nativeElement.parentNode;
        this.parentEl.insertBefore(this.codeEl, this.el.nativeElement.nextSibling);
        hljs.configure(Object.assign({}, this.options));
        hljs.highlightBlock(this.codeEl);
    };
    HighlightJsDirective.prototype.destroy = function () {
        if (this.codeEl) {
            this.parentEl.removeChild(this.codeEl);
            this.codeEl = null;
        }
    };
    HighlightJsDirective.prototype.ngOnInit = function () {
        this.init();
    };
    HighlightJsDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.ngModel) {
            this.modelValue$ = this.ngModel.valueChanges.subscribe(function (res) {
                _this.code = _this.escapeHTML(res);
                _this.init();
            });
        }
        else {
            this.initMutation();
        }
    };
    HighlightJsDirective.prototype.ngOnDestroy = function () {
        this.destroy();
        this.destroyMutation();
        if (this.modelValue$) {
            this.modelValue$.unsubscribe();
        }
    };
    HighlightJsDirective.prototype.initMutation = function () {
        if (typeof MutationObserver === 'undefined')
            return;
        this.observer = new MutationObserver(this.init.bind(this));
        this.observer.observe(this.el.nativeElement, {
            characterData: true,
            childList: true,
            subtree: true,
        });
    };
    HighlightJsDirective.prototype.destroyMutation = function () {
        if (!this.observer)
            return;
        this.observer.disconnect();
    };
    HighlightJsDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgModel, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], HighlightJsDirective.prototype, "options", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], HighlightJsDirective.prototype, "lang", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], HighlightJsDirective.prototype, "code", void 0);
    HighlightJsDirective = __decorate([
        Directive({
            selector: '[highlight-js]',
            host: {
                style: 'display:none;',
            },
            exportAs: 'highlightJs',
        }),
        __param(1, Optional()),
        __param(2, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [ElementRef,
            NgModel, Object])
    ], HighlightJsDirective);
    return HighlightJsDirective;
}());

var HighlightJsModule = /** @class */ (function () {
    function HighlightJsModule() {
    }
    HighlightJsModule = __decorate([
        NgModule({
            imports: [FormsModule],
            declarations: [HighlightJsDirective],
            exports: [HighlightJsDirective]
        })
    ], HighlightJsModule);
    return HighlightJsModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { HighlightJsDirective, HighlightJsModule };
//# sourceMappingURL=ngx-highlight-js.js.map
