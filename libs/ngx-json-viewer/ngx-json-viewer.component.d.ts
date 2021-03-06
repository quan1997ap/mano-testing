import { OnChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export interface Segment {
    key: string;
    value: any;
    type: undefined | string;
    description: string;
    expanded: boolean;
}
export declare class NgxJsonViewerComponent implements OnChanges {
    json: any;
    expanded: boolean;
    /**
     * @deprecated It will be always true and deleted in version 3.0.0
     */
    cleanOnChange: boolean;
    segments: Segment[];
    ngOnChanges(): void;
    isExpandable(segment: Segment): boolean;
    toggle(segment: Segment): void;
    private parseKeyValue(key, value);
    static ngFactoryDef: ɵngcc0.ɵɵFactoryDef<NgxJsonViewerComponent>;
    static ngComponentDef: ɵngcc0.ɵɵComponentDefWithMeta<NgxJsonViewerComponent, "ngx-json-viewer", never, { 'expanded': "expanded", 'cleanOnChange': "cleanOnChange", 'json': "json" }, {}, never>;
}

//# sourceMappingURL=ngx-json-viewer.component.d.ts.map