import { Injectable } from '@angular/core';
import {
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
} from 'docx';
import { saveAs } from 'file-saver';
import { DocInterface } from './utils/doc-info.interface';
import { generateDocHelper } from './utils/doc-generator.helper';
import { generateTemplateSample } from './utils/doc-generator-template.helper';

@Injectable({
  providedIn: 'root',
})
export class DocGeneratorService {
  constructor() {}

  newGeneration(): void {}

  generateTemplateSample(infoTemplate: any) {
    generateTemplateSample(infoTemplate);
  }

  generateDoc(infoDoc: DocInterface) {
    console.log('infoDoc', infoDoc);
    generateDocHelper(infoDoc);
  }

  createLandscapeDocument(retorno = false): void | Document {
    const doc = new Document({
      sections: [
        // Primera sección en formato apaisado (página 1)
        {
          properties: {
            page: {
              size: {
                width: 15840, // Tamaño en puntos para orientación apaisada
                height: 12240, // Tamaño en puntos para orientación apaisada
              },
              margin: {
                top: 720,
                right: 720,
                bottom: 720,
                left: 720,
              },
            },
          },
          children: [
            // new Paragraph({
            //   children: [new TextRun('Aquí hay una tabla:')],
            // }),
            new Table({
              width: { size: '100%' },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      // width: { size: '100%' },
                      shading: { fill: '1f9cdb' }, // Color de fondo azul
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'Cabecera 1',
                              size: 28, // Tamaño de fuente (28 = 14 puntos)
                            }),
                          ],
                        }),
                      ],
                    }),
                    new TableCell({
                      shading: { fill: '0000FF' }, // Color de fondo azul
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: 'Cabecera 2',
                              size: 28, // Tamaño de fuente (28 = 14 puntos)
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph('Celda 2-1')],
                    }),
                    new TableCell({
                      children: [new Paragraph('Celda 2-2')],
                    }),
                  ],
                }),
              ],
            }),
          ],
        },
        // Nueva sección en formato vertical (página 3)
        {
          properties: {
            page: {
              size: {
                width: 12240, // Tamaño en puntos para orientación vertical
                height: 15840, // Tamaño en puntos para orientación vertical
              },
              margin: {
                top: 720,
                right: 720,
                bottom: 720,
                left: 720,
              },
            },
          },
          children: [
            new Paragraph({
              text: 'Este es un documento en formato vertical.',
              spacing: {
                before: 200,
              },
            }),
          ],
        },
      ],
    });

    if (!retorno) {
      this.exportDoc(doc, 'landscape');
    }
    return doc;
  }

  generateWordDocument(retorno = false): void | Document {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun('Hello World'),
                new TextRun({
                  text: '\nThis is bold',
                  bold: true,
                }),
                new TextRun({
                  text: '\nThis is another line',
                  break: 1,
                }),
              ],
            }),
          ],
        },
      ],
    });

    !retorno && this.exportDoc(doc, 'document');
    return doc;
  }

  generateTableDocument(retorno = false): void | Document {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [new TextRun('Aquí hay una tabla:')],
            }),
            new Table({
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph('Celda 1-1')],
                    }),
                    new TableCell({
                      children: [new Paragraph('Celda 1-2')],
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph('Celda 2-1')],
                    }),
                    new TableCell({
                      children: [new Paragraph('Celda 2-2')],
                    }),
                  ],
                }),
              ],
            }),
          ],
        },
      ],
    });

    !retorno && this.exportDoc(doc, 'table');
    return doc;
  }

  private exportDoc(doc: Document, name: string) {
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, `${name}.docx`);
    });
  }
}
