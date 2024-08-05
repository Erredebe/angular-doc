import { PatchType, TextRun, patchDocument } from 'docx';
import * as saveAs from 'file-saver';
import { DocInterface } from './doc-info.interface';

export function generateTemplateSample(infoDoc: DocInterface) {
  // Convertir todas las keys de infoDoc a patches
  const patches = Object.entries(infoDoc).reduce((acc, [key, value]) => {
    const formattedValue = value ? convertToString(value) : '';
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

function convertToString(value: any): string {
  // Verifica si el valor es un número finito (no NaN, Infinity o -Infinity)
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value.toString(); // Convierte el número a string
  } else {
    return String(value); // Convierte otros tipos de valores a string
  }
}
