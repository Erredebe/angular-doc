import { Component, OnInit } from '@angular/core';
import { DocxGeneratorService } from '../docx-generator/docx-generator.service';

@Component({
  selector: 'app-docx-tool-generate-boton',
  templateUrl: './docx-tool-generate-boton.component.html',
  styleUrls: ['./docx-tool-generate-boton.component.scss'],
})
export class DocxToolGenerateBotonComponent implements OnInit {
  constructor(private docxGeneratorService: DocxGeneratorService) {}

  ngOnInit(): void {}
  onButtonClick() {
    // Llamar al servicio cuando se hace clic en el botón
    //  this.docxGeneratorService.generateTemplateSample();
    this.docxGeneratorService.addTableToTemplate(
      [
        { index: 1, text: 'Suelo', oferta: '705.000,00 €' },
        { index: 2, text: 'Urbano (solar)', oferta: '705.000,00 €' },
      ],
      'assets/plantilla.docx',
      'DocumentoConTabla'
    );
  }
}
