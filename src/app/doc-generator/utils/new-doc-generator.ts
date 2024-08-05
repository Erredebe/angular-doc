import { PatchType, TextRun, patchDocument } from 'docx';
import * as saveAs from 'file-saver';
import { LocalStorageKeys } from 'src/app/local-storage/utils/local-storage.helper';

export function newDocGenerate(files: any[], name = 'documentoGenerado') {
  // Obtener la plantilla desde el local storage
  const templateBase64 = localStorage.getItem(LocalStorageKeys.PLANTILLA);
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
  const data = files.find((file) => file.key === LocalStorageKeys.DATOSJSON);
  if (data) {
    parsedData = JSON.parse(data.file);
    // Continuar con el procesamiento de parsedData...
  } else {
    console.error('Error: No se encontró el JSON de datos en los archivos.');
  }

  // Convertir todas las keys de infoDoc a patches
  const patches = Object.entries(parsedData).reduce((acc, [key, value]) => {
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

function convertToString(value: any): string {
  // Verifica si el valor es un número finito (no NaN, Infinity o -Infinity)
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value.toString(); // Convierte el número a string
  } else {
    return String(value); // Convierte otros tipos de valores a string
  }
}
