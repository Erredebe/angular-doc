import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JsonToolService {
  constructor() {}

  public formatJson(jsonInput: string) {
    debugger;
    try {
      // JSON.parse(this.store[1].data)
      const parsedJson = JSON.parse(jsonInput);
      const formattedJson = JSON.stringify(parsedJson, null, 4);
      return formattedJson;
    } catch (error) {
      console.error('Error al formatear JSON:', error);
      return 'JSON inválido';
    }
  }
}
