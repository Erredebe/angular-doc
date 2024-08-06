import { Component, OnInit } from '@angular/core';
import { StorageService } from './core/storage/storage.service';
import { StorageKeys } from './core/storage/utils/storage.helpers';
import { sampleInfoTemplate } from './docx-tool/utils/info.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public jsonSample: any;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.jsonSample = this.storageService.getStoreItems(StorageKeys.DATOSJSON);
  }

  handleJsonChange($event: any) {
    debugger;
    console.log('handleJsonChange', $event);
  }
  handleNameSaved($event: any) {
    console.log('handleNameSaved', $event);
  }
  handleJsonToolChange($event: any) {
    console.log('handleJsonToolChange', $event);
  }

  handleJsonSaveClick($event: any) {
    debugger;
    const { json } = $event;
    console.log('handleJsonSaveClick', json);
    debugger;
    this.storageService.setStorageItem(StorageKeys.DATOSJSON, json);
  }
}
