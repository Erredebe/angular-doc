import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocGeneratorService } from './doc-generator/doc-generator.service';
import { JsonReaderComponent } from './json-reader/json-reader.component';
import { LocalStorageService } from './local-storage/local-storage.service';
import { DocxUploaderComponent } from './docx-uploader/docx-uploader.component';
import { JsonToolModule } from './json-tool/json-tool.module';
import { JsonToolComponent } from './json-tool/json-tool.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, JsonReaderComponent, DocxUploaderComponent],
  imports: [BrowserModule, AppRoutingModule, JsonToolModule, CoreModule],
  providers: [DocGeneratorService, LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
