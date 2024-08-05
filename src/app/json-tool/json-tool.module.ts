import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonToolComponent } from './json-tool.component';
import { JsonToolTextareaComponent } from './components/json-tool-textarea/json-tool-textarea.component';
import { JsonToolInputNameComponent } from './components/json-tool-input-name/json-tool-input-name.component';

@NgModule({
  declarations: [JsonToolComponent, JsonToolTextareaComponent, JsonToolInputNameComponent],
  imports: [CommonModule],
  exports: [JsonToolComponent],
})
export class JsonToolModule {}
