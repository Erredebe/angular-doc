import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonReaderComponent } from './json-reader/json-reader.component';
import { JsonToolModule } from './json-tool/json-tool.module';
import { CoreModule } from './core/core.module';
import { StorageService } from './core/storage/storage.service';
import { DocxToolModule } from './docx-tool/docx-tool.module';

@NgModule({
  declarations: [AppComponent, JsonReaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JsonToolModule,
    CoreModule,
    DocxToolModule,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
