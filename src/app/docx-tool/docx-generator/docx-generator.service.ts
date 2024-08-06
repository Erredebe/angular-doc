import { Injectable } from '@angular/core';

import {
  PatchType,
  patchDocument,
  Document,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  Packer,
} from 'docx';

import { saveAs } from 'file-saver';
import { sampleInfoTemplate } from '../utils/info.constants';
import { StorageKeys } from 'src/app/core/storage/utils/storage.helpers';

@Injectable({
  providedIn: 'root',
})
export class DocxGeneratorService {
  constructor() {}

  // generamos un docx basado en la plantilla de assets y los valores salvados en un objeto
  generateDocx() {
    throw new Error('Method not implemented.');
  }

  //Generamos un documento word basado en una plantilla subida en el proyecto
  // y un JSON que tenemos almacenado dentro
  generateTemplateSample() {
    // Convertir todas las keys de infoDoc a patches
    const patches = Object.entries(sampleInfoTemplate).reduce(
      (acc, [key, value]) => {
        const formattedValue = value ? this.convertToString(value) : '';
        acc[key] = {
          type: PatchType.PARAGRAPH,
          children: [
            new TextRun({
              text: formattedValue,
              bold: true, // Aplicar estilo bold
            }),
          ],
        };
        return acc;
      },
      {} as { [key: string]: any }
    );

    // Cargar la plantilla desde los assets
    fetch('assets/plantilla_prop_venta.docx')
      .then((response) => response.arrayBuffer())
      .then((data) => {
        // Usar patchDocument de docx para reemplazar contenido
        patchDocument(data, { patches })
          .then((docUint8Array) => {
            // Convertir Uint8Array a Blob
            const blob = new Blob([docUint8Array], {
              type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            });

            // Guardar el documento como un archivo utilizando file-saver
            saveAs(blob, 'My Document.docx');
          })
          .catch((error) => {
            console.error('Error generando el documento:', error);
          });
      });
  }

  convertToString(value: any): string {
    // Verifica si el valor es un número finito (no NaN, Infinity o -Infinity)
    if (typeof value === 'number' && Number.isFinite(value)) {
      return value.toString(); // Convierte el número a string
    } else {
      return String(value); // Convierte otros tipos de valores a string
    }
  }

  //utiliza el json guardado para generar la plantilla salvada
  jsonSavedToUploadedTemplate(files: any[], name = 'documentoGenerado') {
    // Obtener la plantilla desde el local storage
    const templateBase64 = localStorage.getItem(StorageKeys.PLANTILLA);
    if (!templateBase64) {
      console.error('Error: No se encontró la plantilla en el local storage.');
      return;
    }

    // Decodificar la plantilla de base64 a ArrayBuffer
    const templateBinaryString = atob(templateBase64);
    const templateArrayBuffer = new ArrayBuffer(templateBinaryString.length);
    const templateUint8Array = new Uint8Array(templateArrayBuffer);
    for (let i = 0; i < templateBinaryString.length; i++) {
      templateUint8Array[i] = templateBinaryString.charCodeAt(i);
    }

    // Obtener los datos JSON desde los archivos
    let parsedData;
    const data = files.find((file) => file.key === StorageKeys.DATOSJSON);
    if (data) {
      parsedData = JSON.parse(data.file);
      // Continuar con el procesamiento de parsedData...
    } else {
      console.error('Error: No se encontró el JSON de datos en los archivos.');
    }

    // Convertir todas las keys de infoDoc a patches
    const patches = Object.entries(parsedData).reduce((acc, [key, value]) => {
      const formattedValue = value ? this.convertToString(value) : '';
      acc[key] = {
        type: PatchType.PARAGRAPH,
        children: [
          new TextRun({
            text: formattedValue,
            bold: true, // Aplicar estilo bold
          }),
        ],
      };
      return acc;
    }, {} as { [key: string]: any });

    // Usar patchDocument de docx para reemplazar contenido
    patchDocument(templateArrayBuffer, { patches })
      .then((docUint8Array) => {
        // Convertir Uint8Array a Blob
        const blob = new Blob([docUint8Array], {
          type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        });

        // Guardar el documento como un archivo utilizando file-saver
        saveAs(blob, `${name}.docx`);
      })
      .catch((error) => {
        console.error('Error generando el documento:', error);
      });
  }

  generateBasicTemplate(
    jsonData: string, // Aquí esperamos que jsonData sea una cadena JSON
    retorno = false
  ): void | Document {
    // Convertir la cadena JSON en un objeto JavaScript
    debugger;
    const jsonObject = jsonData; // JSON.parse(jsonData);

    // Generar la interfaz TypeScript
    const interfaceCode = this.generateInterfaceCode(jsonObject);

    // Recorrer el objeto JSON para crear las filas de la tabla
    const rows = Object.keys(jsonObject).map((key: any) => {
      const keyParagraph = new Paragraph({
        children: [new TextRun({ text: key, bold: true })],
      });

      const keyDocumentTemplate = new Paragraph({
        children: [new TextRun({ text: `{{${key}}}`, bold: false })],
      });
      const valueParagraph = new Paragraph({
        children: [new TextRun({ text: jsonObject[key], bold: false })],
      });

      return new TableRow({
        children: [
          new TableCell({ children: [keyParagraph] }),
          new TableCell({ children: [keyDocumentTemplate] }),
          new TableCell({ children: [valueParagraph] }),
        ],
      });
    });

    // Crear una tabla de 1x1 que contenga el JSON formateado
    const jsonFormattedTable = new Table({
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({ text: JSON.stringify(jsonObject, null, 2) }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });

    // Crear la tabla para la interfaz TypeScript
    const interfaceTable = new Table({
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun(interfaceCode)],
                }),
              ],
            }),
          ],
        }),
      ],
    });

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun('Plantilla Simple para comprobar los datos'),
              ],
            }),
            new Table({ rows: rows }), // Añadimos las filas a la tabla
            new Paragraph({
              children: [new TextRun('JSON utilizado en el documento:')],
            }),
            jsonFormattedTable, // Añadimos la tabla con el JSON formateado
            new Paragraph({
              children: [
                new TextRun('Interfaz TypeScript generada a partir del JSON:'),
              ],
            }),
            interfaceTable, // Añadimos la tabla con la interfaz TypeScript
          ],
        },
      ],
    });

    if (!retorno) {
      this.exportDoc(doc, 'table');
    }

    return doc;
  }

  exportDoc(doc: Document, name: string): void {
    Packer.toBlob(doc).then((blob) => {
      const fileName = `${name}.docx`;
      saveAs(blob, fileName);
    });
  }

  generateInterfaceCode(jsonObject: any): string {
    let interfaceCode = 'export interface JsonInterface {\n';
    for (const key of Object.keys(jsonObject)) {
      const type = typeof jsonObject[key];
      interfaceCode += `  ${key}: ${type};\n`;
    }
    interfaceCode += '}';
    return interfaceCode;
  }
}
