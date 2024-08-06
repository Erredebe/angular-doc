import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { StorageKeys } from '../core/storage/utils/storage.helpers';

@Component({
  selector: 'app-json-reader',
  templateUrl: './json-reader.component.html',
  styleUrls: ['./json-reader.component.scss'],
})
export class JsonReaderComponent implements OnInit {
  @ViewChild('jsonTextarea', { static: true })
  jsonTextarea!: ElementRef<HTMLTextAreaElement>;

  @ViewChild('jsonCode', { static: true })
  jsonCode!: ElementRef<HTMLElement>;

  @ViewChild('nameInput', { static: true })
  nameInput!: ElementRef<HTMLInputElement>;

  @Output() jsonSaved: EventEmitter<any> = new EventEmitter<any>();
  @Output() nameSaved: EventEmitter<any> = new EventEmitter<any>();

  saved = false;
  ngOnInit(): void {
    const savedJson = localStorage.getItem(StorageKeys.DATOSJSON);
    if (savedJson) {
      const jsonString = JSON.parse(savedJson);
      const formattedJson = JSON.stringify(jsonString, null, 4);
      this.jsonTextarea.nativeElement.value = formattedJson;
      this.updateJsonDisplay();
    }
  }

  formatJson() {
    try {
      const jsonInput = this.jsonTextarea.nativeElement.value;
      const parsedJson = JSON.parse(jsonInput);
      this.jsonCode.nativeElement.textContent = JSON.stringify(
        parsedJson,
        null,
        4
      );
    } catch (error) {
      this.jsonCode.nativeElement.textContent = 'Error: JSON no válido';
    }
  }

  saveJson() {
    const jsonInput = this.jsonTextarea.nativeElement.value;
    try {
      const parsedJson = JSON.parse(jsonInput);
      this.jsonSaved.emit(parsedJson);
      localStorage.setItem(StorageKeys.DATOSJSON, JSON.stringify(parsedJson));
      this.saved = true;
      alert('JSON guardado correctamente');
    } catch (error) {
      alert('Error: El texto ingresado no es un JSON válido.');
    }
  }

  saveName() {
    const name = this.nameInput.nativeElement.value;
    this.nameSaved.emit(name);
  }

  downloadJson() {
    const jsonInput = this.jsonTextarea.nativeElement.value;
    try {
      const parsedJson = JSON.parse(jsonInput);
      const formattedJson = JSON.stringify(parsedJson, null, 2);
      const blob = new Blob([formattedJson], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.json';
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert('Error al descargar el JSON.');
    }
  }

  private updateJsonDisplay() {
    try {
      const jsonInput = this.jsonTextarea.nativeElement.value;
      const parsedJson = JSON.parse(jsonInput);
      const formattedJson = JSON.stringify(parsedJson, null, 4);
      this.jsonCode.nativeElement.textContent = formattedJson;
    } catch (error) {
      this.jsonCode.nativeElement.textContent = 'Error: JSON no válido';
    }
  }
}
