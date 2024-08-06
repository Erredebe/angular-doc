import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-json-tool-save',
  templateUrl: './json-tool-save.component.html',
  styleUrls: ['./json-tool-save.component.scss'],
})
export class JsonToolSaveComponent {
  @Output() saveClicked = new EventEmitter<void>();

  onSave() {
    this.saveClicked.emit();
  }
}
