import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnDestroy, OnInit {

  //  For testing
  data = {
    'simple key': 'simple value',
    'numbers': 1234567,
    'simple list': ['value1', 22222, 'value3'],
    'special value': undefined,
    'owner': null,
    'simple obect': {
      'simple key': 'simple value',
      'numbers': 1234567,
      'simple list': ['value1', 22222, 'value3'],
      'simple obect': {
        'key1': 'value1',
        'key2': 22222,
        'key3': 'value3'
      }
    }
  };


  html = `
      <ng-container>
        <ace-editor [(text)]="code" mode="json" style="height:400px;"></ace-editor>
        <ngx-json-viewer [json]="data"></ngx-json-viewer>   
        <div [innerHTML]="data" highlight-js mode="default"></div>
    </ng-container>
  `

  yaml = `
    map:
    # Unordered set of key: value pairs.
    Block style: !!map
      Clark : Evans
      Ingy  : döt Net
      Oren  : Ben-Kiki
    Flow style: !!map { Clark: Evans, Ingy: döt Net, Oren: Ben-Kiki }
  `;

  get code() {
    return JSON.stringify(this.data, null, 2);
  }

  set code(v) {
    try {
      this.data = JSON.parse(v);
    }
    catch (e) {
      console.log('error occored while you were typing the JSON');
    };
  }


  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

}
