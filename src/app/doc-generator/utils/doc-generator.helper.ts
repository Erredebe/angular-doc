import { saveAs } from 'file-saver';
import {
  Document,
  Packer,
  Paragraph,
  PageOrientation,
  patchDocument,
  PatchType,
  TextRun,
} from 'docx';
import {
  DocInterface,
  DocPages,
  DocSection,
  DocPageAlignment,
  DocSectionKind,
} from './doc-info.interface';
import { landscapePage, portraitPage } from './doc-generator.constants';

export function generateDocHelper(infoDoc: DocInterface) {
  console.log('infoDoc', infoDoc);

  // Crear un array para almacenar las secciones del documento
  const sections =
    infoDoc.pages?.map((page) => {
      const children =
        page.sections
          ?.filter((section) => section.kind === DocSectionKind.Parrafo)
          .map(
            (section) =>
              new Paragraph({
                text: section.content,
                spacing: { before: 200 },
              })
          ) || [];

      return {
        properties:
          page.alignamet === DocPageAlignment.Horizontal
            ? landscapePage
            : portraitPage,
        children,
      };
    }) || [];

  // Crear el nuevo documento con las secciones generadas
  const doc = new Document({ sections });

  // Llamar a la función exportDoc para exportar el documento
  exportDoc(doc, infoDoc.titulo);
}

export function exportDoc(doc: Document, name: string) {
  Packer.toBlob(doc).then((blob) => {
    const nameToSet = `${name} ${formatDateTimeNow()}.docx`;
    saveAs(blob, nameToSet);
  });
}

function formatDateTimeNow(): string {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Los meses son base 0
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${day}/${month}/${year} - ${hours}:${minutes}`;
}
