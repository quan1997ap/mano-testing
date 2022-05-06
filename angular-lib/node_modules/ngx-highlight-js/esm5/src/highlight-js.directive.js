import { __decorate, __metadata, __param } from "tslib";
import { Directive, ElementRef, Input, OnInit, OnDestroy, AfterViewInit, Inject, Optional, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgModel } from '@angular/forms';
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
export { HighlightJsDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LWpzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1oaWdobGlnaHQtanMvIiwic291cmNlcyI6WyJzcmMvaGlnaGxpZ2h0LWpzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsYUFBYSxFQUNiLE1BQU0sRUFDTixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVl6QztJQVNFLDhCQUNVLEVBQTJCLEVBQ2YsT0FBZ0IsRUFDVixHQUFRO1FBRjFCLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNWLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFWM0IsU0FBSSxHQUFHLE1BQU0sQ0FBQztJQVdwQixDQUFDO0lBRUkseUNBQVUsR0FBbEIsVUFBbUIsR0FBVztRQUM1QixPQUFPLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQzthQUNmLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO2FBQ3RCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO2FBQ3JCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO2FBQ3JCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDO2FBQ3ZCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLG1DQUFJLEdBQVo7UUFDRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLElBQUksSUFBSSxD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QixJQUFJLEVBQUU7Z0JBQ0osS0FBSyxFQUFFLGVBQWU7YUFDdkI7WUFDRCxRQUFRLEVBQUUsYUFBYTtTQUN4QixDQUFDO1FBWUcsV0FBQSxRQUFRLEVBQUUsQ0FBQTtRQUNWLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO3lDQUZMLFVBQVU7WUFDTyxPQUFPO09BWDNCLG9CQUFvQixDQXdGaEM7SUFBRCwyQkFBQztDQUFBLEFBeEZELElBd0ZDO1NBeEZZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIEluamVjdCxcclxuICBPcHRpb25hbCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmRlY2xhcmUgY29uc3QgaGxqczogYW55O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbaGlnaGxpZ2h0LWpzXScsXHJcbiAgaG9zdDoge1xyXG4gICAgc3R5bGU6ICdkaXNwbGF5Om5vbmU7JyxcclxuICB9LFxyXG4gIGV4cG9ydEFzOiAnaGlnaGxpZ2h0SnMnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0SnNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgb3B0aW9uczogYW55O1xyXG4gIEBJbnB1dCgpIGxhbmcgPSAnaHRtbCc7XHJcbiAgQElucHV0KCkgY29kZTogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgY29kZUVsOiBIVE1MRWxlbWVudDtcclxuICBwcm90ZWN0ZWQgcGFyZW50RWw6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgbW9kZWxWYWx1ZSQ6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbmdNb2RlbDogTmdNb2RlbCxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXHJcbiAgKSB7fVxyXG5cclxuICBwcml2YXRlIGVzY2FwZUhUTUwoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIChzdHIgfHwgJycpXHJcbiAgICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXHJcbiAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcclxuICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxyXG4gICAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXHJcbiAgICAgIC5yZXBsYWNlKC8nL2csICcmYXBvczsnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdCgpIHtcclxuICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5jb2RlRWwgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KCdwcmUnKTtcclxuICAgIGlmICh0aGlzLmxhbmcpIHtcclxuICAgICAgdGhpcy5jb2RlRWwuY2xhc3NOYW1lID0gdGhpcy5sYW5nO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb2RlRWwuaW5uZXJIVE1MID1cclxuICAgICAgdGhpcy5jb2RlIHx8ICcnICsgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTC50cmltKCk7XHJcbiAgICB0aGlzLnBhcmVudEVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB0aGlzLnBhcmVudEVsLmluc2VydEJlZm9yZSh0aGlzLmNvZGVFbCwgdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm5leHRTaWJsaW5nKTtcclxuXHJcbiAgICBobGpzLmNvbmZpZ3VyZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMpKTtcclxuICAgIGhsanMuaGlnaGxpZ2h0QmxvY2sodGhpcy5jb2RlRWwpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuY29kZUVsKSB7XHJcbiAgICAgIHRoaXMucGFyZW50RWwucmVtb3ZlQ2hpbGQodGhpcy5jb2RlRWwpO1xyXG4gICAgICB0aGlzLmNvZGVFbCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubmdNb2RlbCkge1xyXG4gICAgICB0aGlzLm1vZGVsVmFsdWUkID0gdGhpcy5uZ01vZGVsLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aGlzLmVzY2FwZUhUTUwocmVzKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmluaXRNdXRhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIHRoaXMuZGVzdHJveU11dGF0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5tb2RlbFZhbHVlJCkge1xyXG4gICAgICB0aGlzLm1vZGVsVmFsdWUkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAjcmVnaW9uIE11dGF0aW9uXHJcblxyXG4gIHByaXZhdGUgb2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XHJcbiAgcHJpdmF0ZSBpbml0TXV0YXRpb24oKSB7XHJcbiAgICBpZiAodHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcbiAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5pbml0LmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG4gICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveU11dGF0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLm9ic2VydmVyKSByZXR1cm47XHJcbiAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25uXHJcbn1cclxuIl19