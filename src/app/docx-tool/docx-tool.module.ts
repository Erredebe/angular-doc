import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocxUploaderComponent } from './docx-uploader/docx-uploader.component';
import { DocxToolGenerateBotonComponent } from './docx-tool-generate-boton/docx-tool-generate-boton.component';
import { DooxToolTemplateGeneratorComponent } from './doox-tool-template-generator/doox-tool-template-generator.component';
import { DocxGeneratorService } from './docx-generator/docx-generator.service';

@NgModule({
  declarations: [
    DocxUploaderComponent,
    DocxToolGenerateBotonComponent,
    DooxToolTemplateGeneratorComponent,
  ],
  imports: [CommonModule],
  providers: [DocxGeneratorService],
  exports: [
    DocxUploaderComponent,
    DocxToolGenerateBotonComponent,
    DooxToolTemplateGeneratorComponent,
  ],
})
export class DocxToolModule {}
