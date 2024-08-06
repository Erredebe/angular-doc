import { Injectable, OnInit } from '@angular/core';
import { StorageKeys } from './utils/storage.helpers';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public store: any[] = [];

  constructor() {}

  loadAllFilesFromLocalStorage() {
    const keys = Object.values(StorageKeys);
    this.store = [];
    keys.forEach((value: StorageKeys) => {
      this.store = [
        ...this.store,
        { key: value, data: this.getStorageItem(value) },
      ];
    });
  }

  getAllStoreItems(): any[] {
    return this.store;
  }

  getStoreItems(key: StorageKeys) {
    return this.store.find((item) => item.key === key);
  }

  setStorageItem(key: StorageKeys, value: any): boolean {
    try {
      localStorage.setItem(
        key,
        key !== StorageKeys.DATOSJSON ? value : JSON.stringify(value)
      );
      return true;
    } catch (e) {
      console.log('error', e);
      return false;
    }
  }

  private getStorageItem(item: StorageKeys) {
    const storedValue = localStorage.getItem(item);
    return storedValue;
  }
}
