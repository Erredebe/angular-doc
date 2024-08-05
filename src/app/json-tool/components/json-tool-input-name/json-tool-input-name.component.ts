import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-json-tool-input-name',
  templateUrl: './json-tool-input-name.component.html',
  styleUrls: ['./json-tool-input-name.component.scss'],
})
export class JsonToolInputNameComponent implements OnInit {
  @Output() nameSaved: EventEmitter<any> = new EventEmitter<string>();

  @ViewChild('nameInput', { static: true })
  nameInput!: ElementRef<HTMLInputElement>;
  constructor() {}

  ngOnInit(): void {}

  saveName() {
    this.nameSaved.emit(this.nameInput.nativeElement.value);
  }
}
