import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { JsonToolInputNameComponent } from './components/json-tool-input-name/json-tool-input-name.component';

@Component({
  selector: 'app-json-tool',
  templateUrl: './json-tool.component.html',
  styleUrls: ['./json-tool.component.scss'],
})
export class JsonToolComponent implements OnInit {
  @ViewChild(JsonToolInputNameComponent)
  inputNameComponent!: JsonToolInputNameComponent;

  @Output() jsonChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() nameSaved: EventEmitter<any> = new EventEmitter<string>();
  @Output() jsonToolChange: EventEmitter<any> = new EventEmitter<any>();

  private data = { name: null, json: null };

  constructor() {}

  ngOnInit(): void {}

  handleNameSaved($event: any) {
    this.nameSaved.emit($event);
    this.data = { ...this.data, name: $event };
  }

  handleJsonChange($event: any) {
    this.jsonChange.emit($event);
    this.data = { ...this.data, json: $event };
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
