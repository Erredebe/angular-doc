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

  @Input() jsonDataInput: string = '';

  @Output() jsonChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private jsonToolService: JsonToolService) {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    const {
      jsonDataInput: { currentValue },
    } = changes;
    !!currentValue && this.jsonChange.emit(currentValue);
  }

  handlChange() {
    const json = JSON.parse(this.jsonTextarea.nativeElement.value);
    debugger;
    this.jsonChange.emit(json);
  }
}
