import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {XxxAlertModule, XxxErrorHandlerModule, XxxLogModule, XxxMessageModule} from '@app/xxx-common';
import {XxxAnswersPageModule} from '@app/modules/xxx-answers-page/xxx-answers-page.module';
import {XxxHeaderModule} from '@app/modules/xxx-header/xxx-header.module';
import {XxxHomePageModule} from '@app/modules/xxx-home-page/xxx-home-page.module';
import {XxxQuestionsPageModule} from '@app/modules/xxx-questions-page/xxx-questions-page.module';
import {XxxSearchModule} from '@app/modules/xxx-search/xxx-search.module';

// For test
import { FormsModule } from '@angular/forms';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AceEditorModule } from 'ng2-ace-editor';
import { HighlightJsModule } from 'ngx-highlight-js';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    XxxAlertModule,
    XxxAnswersPageModule,
    XxxErrorHandlerModule,
    XxxHeaderModule,
    XxxHomePageModule,
    XxxLogModule,
    XxxMessageModule,
    XxxQuestionsPageModule,
    XxxSearchModule,
    AppRoutingModule,
    // For test
    FormsModule, NgxJsonViewerModule, AceEditorModule, HighlightJsModule 
  ]
})

export class AppModule {
}
