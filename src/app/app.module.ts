import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JsonToolModule } from './json-tool/json-tool.module';
import { CoreModule } from './core/core.module';
import { StorageService } from './core/storage/storage.service';
import { DocxToolModule } from './docx-tool/docx-tool.module';
import { PruebaGeneradorPlantillaComponent } from './prueba-generador-plantilla-component/prueba-generador-plantilla-component.component';
import { PruebaVisorPlantillaComponent } from './prueba-visor-plantilla/prueba-visor-plantilla.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaGeneradorPlantillaComponent,
    PruebaVisorPlantillaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    JsonToolModule,
    CoreModule,
    DocxToolModule,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
