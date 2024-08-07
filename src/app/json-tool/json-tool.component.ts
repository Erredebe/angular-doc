import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ChangeDetectorRef, // Import ChangeDetectorRef
} from '@angular/core';
import { JsonToolInputNameComponent } from './components/json-tool-input-name/json-tool-input-name.component';
import { JsonToolService } from './services/json-tool.service';
import { StorageService } from '../core/storage/storage.service';
import { StorageKeys } from '../core/storage/utils/storage.helpers';
import { sampleInfoTemplate } from '../docx-tool/utils/info.constants';

@Component({
  selector: 'app-json-tool',
  templateUrl: './json-tool.component.html',
  styleUrls: ['./json-tool.component.scss'],
})
export class JsonToolComponent implements OnInit, OnChanges {
  @ViewChild(JsonToolInputNameComponent)
  inputNameComponent!: JsonToolInputNameComponent;

  jsonToTextArea: any;
  jsonToHistoric: any;

  @Input() jsonData: string = '';
  formattedJson: string = '';

  @Output() jsonChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() nameSaved: EventEmitter<any> = new EventEmitter<string>();
  @Output() jsonToolChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() jsonToolJsonSaveClick: EventEmitter<any> = new EventEmitter<any>();

  private data = { name: '', json: {} };

  constructor(
    private storageService: StorageService,
    private cdr: ChangeDetectorRef // Inyecta ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.jsonData && changes.jsonData.currentValue) {
      if (Array.isArray(changes.jsonData.currentValue)) {
        this.jsonToTextArea = changes.jsonData.currentValue[0] || {};
        this.jsonToHistoric = changes.jsonData.currentValue;
      } else {
        // Manejar el caso en que `currentValue` no es un array
        console.warn('jsonData.currentValue no es un array');
        this.jsonToTextArea = {};
        this.jsonToHistoric = [];
      }
    } else {
      // Manejar el caso en que `changes.jsonData` o `changes.jsonData.currentValue` no están definidos
      console.warn(
        'changes.jsonData o changes.jsonData.currentValue no están definidos'
      );
      this.jsonToTextArea = {};
      this.jsonToHistoric = [];
    }
  }

  handleSampleJsonData() {
    this.jsonToTextArea = sampleInfoTemplate;
    this.cdr.detectChanges(); // Forzar la detección de cambios
  }

  handleJsonChange($event: any) {
    let data;
    if ($event instanceof Object) {
      data = $event;
    } else {
      data = this.parseTextAreaToJson($event);
    }

    this.data = { ...this.data, json: data };
    this.jsonChange.emit(data);
  }

  handleDeleteJsonData() {
    this.storageService.removeStorageItem(StorageKeys.DATOSJSON);
  }

  // Función movida a utils o servicio separado
  private parseTextAreaToJson(jsonString: string): object {
    let replacedJsonString = jsonString;
    try {
      replacedJsonString = jsonString
        .replace(/(\w+):/g, '"$1":')
        .replace(/'/g, '"');
    } catch (e) {
      console.warn('Error al replace el JSON:', e);
    }

    try {
      return JSON.parse(replacedJsonString);
    } catch (error) {
      console.warn('Error al parsear el JSON:', error);
    }
    return {};
  }

  handleNameSaved($event: any) {
    this.nameSaved.emit($event);
    this.data = { ...this.data, name: $event };
  }

  onSaveButtonClick() {
    const isValid = !!this.data.name && !!this.data.json;
    if (!this.data.name) {
      alert('Falta añadir un nombre');
    }
    if (!this.data.json) {
      alert('Falta añadir valor del json');
    }
    if (isValid) {
      this.jsonToolJsonSaveClick.emit(this.data);
    }
  }

  emitJsonToolChange() {
    const { json, name } = this.data;
    const toSend = {
      name,
      json,
    };
    this.jsonToolChange.emit(toSend);
  }
}
