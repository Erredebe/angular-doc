import { Component, OnInit } from '@angular/core';
import { DocGeneratorService } from './doc-generator/doc-generator.service';
import {
  sampleInfoDoc,
  sampleInfoTemplate,
} from './doc-generator/utils/sample-info';
import { LocalStorageService } from './local-storage/local-storage.service';
import { newDocGenerate } from './doc-generator/utils/new-doc-generator';
import { LocalStorageKeys } from './local-storage/utils/local-storage.helper';
import { generateTableDocument } from './doc-generator/utils/export-basic-template';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public cargados: any[] = [];
  public docName: string = '';
  constructor(
    private docGeneratorService: DocGeneratorService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.localStorageService.comprobarLocalStorage();
    this.cargados = this.localStorageService.getLocalStorageFiles();
  }
  handleNameSaved(newName: string) {
    this.docName = newName;
  }
  handleJsonSaved(json: any) {
    console.log('JSON recibido:', json);
    // Aquí puedes hacer lo que necesites con el JSON
  }
  generarPlantillaSimple() {
    const jsonData = this.cargados.find(
      ({ key }) => key === LocalStorageKeys.datosJson
    );
    if (jsonData) {
      const jsonToSend = jsonData.file; // Acceder directamente a la propiedad 'file'
      generateTableDocument(jsonToSend);
    }
  }
  newDocGenerate() {
    newDocGenerate(this.cargados, this.docName);
  }
  downloadTableDocument() {
    this.docGeneratorService.generateTableDocument();
  }

  downloadDocument(): void {
    this.docGeneratorService.generateWordDocument();
  }
  downloadLandscape(): void {
    this.docGeneratorService.createLandscapeDocument();
  }

  downloadSampleDoc(): void {
    this.docGeneratorService.generateDoc(sampleInfoDoc);
  }
  downloadTemplateDoc(): void {
    this.docGeneratorService.generateTemplateSample(sampleInfoTemplate);
  }
}
