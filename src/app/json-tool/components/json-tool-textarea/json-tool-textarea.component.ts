import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-json-tool-textarea',
  templateUrl: './json-tool-textarea.component.html',
  styleUrls: ['./json-tool-textarea.component.scss'],
})
export class JsonToolTextareaComponent implements OnInit {
  // @ViewChild('jsonTextarea', { static: true })
  // jsonTextarea!: ElementRef<HTMLTextAreaElement>;
  @Output() jsonChange: EventEmitter<any> = new EventEmitter<any>();
  public jsonText: string = '';
  public jsonData: any;

  constructor() {}

  ngOnInit(): void {}

  // Método para manejar el cambio de contenido en el textarea
  onJsonTextChange(event: Event): void {
    const input = event.target as HTMLTextAreaElement;
    this.jsonText = input.value;
    try {
      this.jsonData = JSON.parse(this.jsonText);
      console.log('JSON válido:', this.jsonData);
    } catch (e) {
      console.warn('JSON no válido:', e);
    }
    this.jsonChange.emit(input.value);
  }
}
