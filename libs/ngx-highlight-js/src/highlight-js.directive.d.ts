import { ElementRef, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';
export declare class HighlightJsDirective implements OnInit, AfterViewInit, OnDestroy {
    private el;
    private ngModel;
    private doc;
    options: any;
    lang: string;
    code: string;
    protected codeEl: HTMLElement;
    protected parentEl: HTMLElement;
    private modelValue$;
    constructor(el: ElementRef<HTMLElement>, ngModel: NgModel, doc: any);
    private escapeHTML;
    private init;
    private destroy;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private observer;
    private initMutation;
    private destroyMutation;
}
