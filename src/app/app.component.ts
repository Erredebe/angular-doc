import { Component, OnInit } from '@angular/core';
import { StorageService } from './core/storage/storage.service';
import { StorageKeys } from './core/storage/utils/storage.helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public store: any[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.storageService.loadAllFilesFromLocalStorage();
    this.store = { ...this.store, ...this.storageService.getAllStoreItems() };
  }

  handleJsonChange($event: any) {
    console.log('handleJsonChange', $event);
  }
  handleNameSaved($event: any) {
    console.log('handleNameSaved', $event);
  }
  handleJsonToolChange($event: any) {
    console.log('handleJsonToolChange', $event);
  }

  handleJsonSaveClick($event: any) {
    const { json } = $event;
    console.log('handleJsonSaveClick', json);
    this.storageService.setStorageItem(StorageKeys.DATOSJSON, json);
  }
}
