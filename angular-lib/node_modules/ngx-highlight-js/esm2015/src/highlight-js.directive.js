import { __decorate, __metadata, __param } from "tslib";
import { Directive, ElementRef, Input, OnInit, OnDestroy, AfterViewInit, Inject, Optional, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgModel } from '@angular/forms';
let HighlightJsDirective = class HighlightJsDirective {
    constructor(el, ngModel, doc) {
        this.el = el;
        this.ngModel = ngModel;
        this.doc = doc;
        this.lang = 'html';
    }
    escapeHTML(str) {
        return (str || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
    }
    init() {
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
    }
    destroy() {
        if (this.codeEl) {
            this.parentEl.removeChild(this.codeEl);
            this.codeEl = null;
        }
    }
    ngOnInit() {
        this.init();
    }
    ngAfterViewInit() {
        if (this.ngModel) {
            this.modelValue$ = this.ngModel.valueChanges.subscribe(res => {
                this.code = this.escapeHTML(res);
                this.init();
            });
        }
        else {
            this.initMutation();
        }
    }
    ngOnDestroy() {
        this.destroy();
        this.destroyMutation();
        if (this.modelValue$) {
            this.modelValue$.unsubscribe();
        }
    }
    initMutation() {
        if (typeof MutationObserver === 'undefined')
            return;
        this.observer = new MutationObserver(this.init.bind(this));
        this.observer.observe(this.el.nativeElement, {
            characterData: true,
            childList: true,
            subtree: true,
        });
    }
    destroyMutation() {
        if (!this.observer)
            return;
        this.observer.disconnect();
    }
};
HighlightJsDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgModel, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
export { HighlightJsDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LWpzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1oaWdobGlnaHQtanMvIiwic291cmNlcyI6WyJzcmMvaGlnaGxpZ2h0LWpzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEVBQ1QsYUFBYSxFQUNiLE1BQU0sRUFDTixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVl6QyxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQVMvQixZQUNVLEVBQTJCLEVBQ2YsT0FBZ0IsRUFDVixHQUFRO1FBRjFCLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNWLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFWM0IsU0FBSSxHQUFHLE1BQU0sQ0FBQztJQVdwQixDQUFDO0lBRUksVUFBVSxDQUFDLEdBQVc7UUFDNUIsT0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7YUFDZixPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQzthQUN0QixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQzthQUNyQixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQzthQUNyQixPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQzthQUN2QixPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFTyxJQUFJO1FBQ1YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztR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QUFLLEVBQUUsZUFBZTtTQUN2QjtRQUNELFFBQVEsRUFBRSxhQUFhO0tBQ3hCLENBQUM7SUFZRyxXQUFBLFFBQVEsRUFBRSxDQUFBO0lBQ1YsV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7cUNBRkwsVUFBVTtRQUNPLE9BQU87R0FYM0Isb0JBQW9CLENBd0ZoQztTQXhGWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBJbmplY3QsXHJcbiAgT3B0aW9uYWwsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IGhsanM6IGFueTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2hpZ2hsaWdodC1qc10nLFxyXG4gIGhvc3Q6IHtcclxuICAgIHN0eWxlOiAnZGlzcGxheTpub25lOycsXHJcbiAgfSxcclxuICBleHBvcnRBczogJ2hpZ2hsaWdodEpzJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodEpzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueTtcclxuICBASW5wdXQoKSBsYW5nID0gJ2h0bWwnO1xyXG4gIEBJbnB1dCgpIGNvZGU6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIGNvZGVFbDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJvdGVjdGVkIHBhcmVudEVsOiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIG1vZGVsVmFsdWUkOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIG5nTW9kZWw6IE5nTW9kZWwsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxyXG4gICkge31cclxuXHJcbiAgcHJpdmF0ZSBlc2NhcGVIVE1MKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAoc3RyIHx8ICcnKVxyXG4gICAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxyXG4gICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXHJcbiAgICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcclxuICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxyXG4gICAgICAucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIHRoaXMuY29kZUVsID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudCgncHJlJyk7XHJcbiAgICBpZiAodGhpcy5sYW5nKSB7XHJcbiAgICAgIHRoaXMuY29kZUVsLmNsYXNzTmFtZSA9IHRoaXMubGFuZztcclxuICAgIH1cclxuICAgIHRoaXMuY29kZUVsLmlubmVySFRNTCA9XHJcbiAgICAgIHRoaXMuY29kZSB8fCAnJyArIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwudHJpbSgpO1xyXG4gICAgdGhpcy5wYXJlbnRFbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgdGhpcy5wYXJlbnRFbC5pbnNlcnRCZWZvcmUodGhpcy5jb2RlRWwsIHRoaXMuZWwubmF0aXZlRWxlbWVudC5uZXh0U2libGluZyk7XHJcblxyXG4gICAgaGxqcy5jb25maWd1cmUoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zKSk7XHJcbiAgICBobGpzLmhpZ2hsaWdodEJsb2NrKHRoaXMuY29kZUVsKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLmNvZGVFbCkge1xyXG4gICAgICB0aGlzLnBhcmVudEVsLnJlbW92ZUNoaWxkKHRoaXMuY29kZUVsKTtcclxuICAgICAgdGhpcy5jb2RlRWwgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm5nTW9kZWwpIHtcclxuICAgICAgdGhpcy5tb2RlbFZhbHVlJCA9IHRoaXMubmdNb2RlbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gdGhpcy5lc2NhcGVIVE1MKHJlcyk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbml0TXV0YXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3lNdXRhdGlvbigpO1xyXG4gICAgaWYgKHRoaXMubW9kZWxWYWx1ZSQpIHtcclxuICAgICAgdGhpcy5tb2RlbFZhbHVlJC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gI3JlZ2lvbiBNdXRhdGlvblxyXG5cclxuICBwcml2YXRlIG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xyXG4gIHByaXZhdGUgaW5pdE11dGF0aW9uKCkge1xyXG4gICAgaWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG4gICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcclxuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICBzdWJ0cmVlOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRlc3Ryb3lNdXRhdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5vYnNlcnZlcikgcmV0dXJuO1xyXG4gICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9ublxyXG59XHJcbiJdfQ==