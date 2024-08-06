import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonToolComponent } from './json-tool.component';
import { JsonToolTextareaComponent } from './components/json-tool-textarea/json-tool-textarea.component';
import { JsonToolInputNameComponent } from './components/json-tool-input-name/json-tool-input-name.component';
import { JsonToolService } from './services/json-tool.service';
import { JsonToolSaveComponent } from './components/json-tool-save/json-tool-save.component';

@NgModule({
  declarations: [
    JsonToolComponent,
    JsonToolTextareaComponent,
    JsonToolInputNameComponent,
    JsonToolSaveComponent,
  ],
  imports: [CommonModule],
  exports: [JsonToolComponent],
  providers: [JsonToolService],
})
export class JsonToolModule {}
