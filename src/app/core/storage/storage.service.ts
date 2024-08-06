import { Injectable, OnInit } from '@angular/core';
import { StorageKeys } from './utils/storage.helpers';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public store: any[] = [];

  constructor() {}

  private refreshAllFilesFromLocalStorageOnStore() {
    const keys = Object.values(StorageKeys);
    this.store = [];
    keys.forEach((value: StorageKeys) => {
      const data = this.getStorageItem(value);
      this.store = [...this.store, { key: value, data }];
    });
  }

  getAllStoreItems(): any[] {
    this.refreshAllFilesFromLocalStorageOnStore();
    return this.store;
  }

  getStoreItems(key: StorageKeys) {
    this.refreshAllFilesFromLocalStorageOnStore();
    const value = this.store.find((item) => item.key === key).data;
    return key === StorageKeys.PLANTILLA ? value : JSON.parse(value);
  }

  setStorageItem(key: StorageKeys, value: any) {
    const formattedValue =
      key === StorageKeys.PLANTILLA ? value : JSON.stringify(value);
    localStorage.setItem(key, formattedValue);
    this.refreshAllFilesFromLocalStorageOnStore();
  }

  // La logica de transformar el json tiene que estar fuera de aquí
  getStorageItem(key: StorageKeys) {
    const storedValue = localStorage.getItem(key);
    return storedValue;
  }
}
