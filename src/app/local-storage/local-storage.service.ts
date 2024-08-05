import { Injectable } from '@angular/core';
import { LocalStorageKeys } from '../local-storage/utils/local-storage.helper';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  // En tu clase o componente
  private basicTools: any[] = [];
  constructor() {}

  public getLocalStorageFiles(): any[] {
    return this.basicTools;
  }

  async comprobarLocalStorage() {
    await this.checkEnumValuesInLocalStorage();
  }

  private async checkEnumValuesInLocalStorage() {
    Object.values(LocalStorageKeys).forEach((value) => {
      const storedValue = localStorage.getItem(value); // Obtener el valor del local storage
      const existsInLocalStorage = storedValue !== null;
      if (existsInLocalStorage) {
        this.basicTools.push({ key: value, file: storedValue }); // Almacenar el valor real en file
        console.log(`${value} existe en el local storage.`);
      } else {
        console.log(`${value} no existe en el local storage.`);
      }
    });
  }

  recoberyPlantilla() {
    const base64Content = localStorage.getItem(LocalStorageKeys.plantilla);
    if (base64Content) {
      // Decodificar el contenido base64
      const fileContent = atob(base64Content);

      // Crear un Blob para descargar el archivo
      const blob = new Blob([fileContent], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'recoveredFile.docx';
      a.click();
      window.URL.revokeObjectURL(url);
    }
  }
}
