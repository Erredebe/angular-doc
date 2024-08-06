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
export class JsonToolComponent implements OnInit, OnChanges {
  @ViewChild(JsonToolInputNameComponent)
  inputNameComponent!: JsonToolInputNameComponent;

  @Input() jsonData: string = '';
  formattedJson: string = '';

  @Output() jsonChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() nameSaved: EventEmitter<any> = new EventEmitter<string>();
  @Output() jsonToolChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() jsonToolJsonSaveClick: EventEmitter<any> = new EventEmitter<any>();

  private data = { name: 'null', json: '' };

  constructor(private jsonToolService: JsonToolService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.formattedJson = this.jsonToolService.formatJson(this.jsonData);
    this.data = { ...this.data, json: this.formattedJson };
  }

  handleNameSaved($event: any) {
    this.nameSaved.emit($event);
    this.data = { ...this.data, name: $event };
  }

  handleJsonChange($event: any) {
    this.jsonChange.emit($event);
    this.data = { ...this.data, json: $event };
  }

  onSaveButtonClick() {
    // validariamos que tenga nombre y data
    console.log('Save button clicked!', this.data);
    this.jsonToolJsonSaveClick.emit(this.data);
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
