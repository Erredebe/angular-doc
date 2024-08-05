import {
  Document,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  Packer,
} from 'docx';
import { saveAs } from 'file-saver';

// Función para generar el documento con la tabla
export function generateTableDocument(
  jsonData: string, // Aquí esperamos que jsonData sea una cadena JSON
  retorno = false
): void | Document {
  // Convertir la cadena JSON en un objeto JavaScript
  const jsonObject = JSON.parse(jsonData);

  // Generar la interfaz TypeScript
  const interfaceCode = generateInterfaceCode(jsonObject);

  // Recorrer el objeto JSON para crear las filas de la tabla
  const rows = Object.keys(jsonObject).map((key) => {
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
    exportDoc(doc, 'table');
  }

  return doc;
}

// Función para generar el código de la interfaz TypeScript
export function generateInterfaceCode(jsonObject: any): string {
  let interfaceCode = 'export interface JsonInterface {\n';
  for (const key of Object.keys(jsonObject)) {
    const type = typeof jsonObject[key];
    interfaceCode += `  ${key}: ${type};\n`;
  }
  interfaceCode += '}';
  return interfaceCode;
}

// Función para exportar el documento
export function exportDoc(doc: Document, name: string): void {
  Packer.toBlob(doc).then((blob) => {
    const fileName = `${name}.docx`;
    saveAs(blob, fileName);
  });
}
