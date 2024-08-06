import { Component, OnInit } from '@angular/core';
import { DocxGeneratorService } from '../docx-generator/docx-generator.service';
import { StorageService } from 'src/app/core/storage/storage.service';
import { StorageKeys } from 'src/app/core/storage/utils/storage.helpers';

@Component({
  selector: 'app-doox-tool-template-generator',
  templateUrl: './doox-tool-template-generator.component.html',
  styleUrls: ['./doox-tool-template-generator.component.scss'],
})
export class DooxToolTemplateGeneratorComponent implements OnInit {
  constructor(
    private docxGeneratorService: DocxGeneratorService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}

  onButtonClick() {
    const jsonString = this.storageService.getStoreItems(StorageKeys.DATOSJSON);
    // Llamada a la función
    this.docxGeneratorService.generateBasicTemplate(jsonString);
  }
}
