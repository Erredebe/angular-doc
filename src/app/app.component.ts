import { Component, OnInit } from '@angular/core';
import { DocGeneratorService } from './doc-generator/doc-generator.service';
import {
  sampleInfoDoc,
  sampleInfoTemplate,
} from './doc-generator/utils/sample-info';
import { LocalStorageService } from './local-storage/local-storage.service';
import { newDocGenerate } from './doc-generator/utils/new-doc-generator';
import { LocalStorageKeys } from './local-storage/utils/local-storage.helper';
import { generateTableDocument } from './doc-generator/utils/export-basic-template';
import { StorageService } from './core/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleJsonChange($event: any) {
    console.log('handleJsonChange', $event);
  }
  handleNameSaved($event: any) {
    console.log('handleNameSaved', $event);
  }
  handleJsonToolChange($event: any) {
    debugger;
    console.log('handleJsonToolChange', $event);
  }
}
