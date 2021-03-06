import { EventEmitter, ElementRef, OnInit, OnDestroy, NgZone } from "@angular/core";
import "brace";
import "brace/theme/monokai";
import * as ɵngcc0 from '@angular/core';
export declare class AceEditorDirective implements OnInit, OnDestroy {
    private zone;
    textChanged: EventEmitter<{}>;
    textChange: EventEmitter<{}>;
    _options: any;
    _readOnly: boolean;
    _theme: string;
    _mode: any;
    _autoUpdateContent: boolean;
    _durationBeforeCallback: number;
    _text: string;
    editor: any;
    oldText: any;
    timeoutSaving: any;
    constructor(elementRef: ElementRef, zone: NgZone);
    ngOnInit(): void;
    ngOnDestroy(): void;
    init(): void;
    initEvents(): void;
    updateText(): void;
    options: any;
    readOnly: any;
    theme: any;
    mode: any;
    setMode(mode: any): void;
    text: string;
    setText(text: any): void;
    autoUpdateContent: any;
    durationBeforeCallback: number;
    setDurationBeforeCallback(num: number): void;
    readonly aceEditor: any;
    static ngFactoryDef: ɵngcc0.ɵɵFactoryDef<AceEditorDirective>;
    static ngDirectiveDef: ɵngcc0.ɵɵDirectiveDefWithMeta<AceEditorDirective, "[ace-editor]", never, { 'options': "options", 'readOnly': "readOnly", 'theme': "theme", 'mode': "mode", 'text': "text", 'autoUpdateContent': "autoUpdateContent", 'durationBeforeCallback': "durationBeforeCallback" }, { 'textChanged': "textChanged", 'textChange': "textChange" }, never>;
}

//# sourceMappingURL=directive.d.ts.map