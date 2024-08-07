import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { JsonToolService } from '../../services/json-tool.service';

@Component({
  selector: 'app-json-tool-textarea',
  templateUrl: './json-tool-textarea.component.html',
  styleUrls: ['./json-tool-textarea.component.scss'],
})
export class JsonToolTextareaComponent implements OnInit, OnChanges {
  @ViewChild('jsonTextarea', { static: true })
  jsonTextarea!: ElementRef<HTMLTextAreaElement>;

  @Input() jsonDataTextArea: string = '';

  @Output() jsonChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private jsonToolService: JsonToolService) {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    const {
      jsonDataTextArea: { currentValue },
    } = changes;
    !!currentValue && this.jsonChange.emit(currentValue);
  }

  handlChange() {
    try {
      const json = JSON.parse(this.jsonTextarea.nativeElement.value);
      this.jsonChange.emit(json);
    } catch (e) {
      console.warn('error Parsing JSON', e);
    }
  }
}
