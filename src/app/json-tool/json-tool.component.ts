import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { JsonToolInputNameComponent } from './components/json-tool-input-name/json-tool-input-name.component';
import { JsonToolService } from './services/json-tool.service';

@Component({
  selector: 'app-json-tool',
  templateUrl: './json-tool.component.html',
  styleUrls: ['./json-tool.component.scss'],
})
export class JsonToolComponent implements OnInit {
  @ViewChild(JsonToolInputNameComponent)
  inputNameComponent!: JsonToolInputNameComponent;

  @Input() jsonData: string = '';
  formattedJson: string = '';

  @Output() jsonChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() nameSaved: EventEmitter<any> = new EventEmitter<string>();
  @Output() jsonToolChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() jsonToolJsonSaveClick: EventEmitter<any> = new EventEmitter<any>();

  private data = { name: '', json: {} };

  constructor(private jsonToolService: JsonToolService) {}

  ngOnInit(): void {}

  handleJsonChange($event: any) {
    debugger;
    let data;
    if (typeof $event === 'object' && $event !== null) {
      data = $event;
    } else {
      data = this.parseTextAreaToJson($event);
    }

    this.data = { ...this.data, json: data };
    this.jsonChange.emit(data);
  }

  // esta funcion tiene que ir a un utils
  private parseTextAreaToJson(jsonStrin: string): object {
    let replacedJsonString = jsonStrin;
    try {
      replacedJsonString = jsonStrin
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

  // handleJsonChange($event: any) {
  //   debugger;
  //   debugger;
  //   this.jsonChange.emit($event);
  //   this.data = { ...this.data, json: $event };
  // }

  onSaveButtonClick() {
    // validariamos que tenga nombre y data
    const isValid = !!this.data.name && !!this.data.json;
    if (!this.data.name) {
      alert('Falta añadir un nombre');
    }
    if (!this.data.json) {
      alert('Falta añadir valor del json');
    }
    // console.log('Save button clicked!', this.data);
    isValid && this.jsonToolJsonSaveClick.emit(this.data);
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
