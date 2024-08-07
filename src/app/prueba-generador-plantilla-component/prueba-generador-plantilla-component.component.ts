import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prueba-generador-plantilla',
  template: `<button (click)="generateDoc()">Generar Documento</button>`,
})
export class PruebaGeneradorPlantillaComponent {
  constructor(private http: HttpClient) {}

  generateDoc() {
    this.http.get('assets/plantilla.html', { responseType: 'text' }).subscribe(
      (data) => {
        // Agregar estilos para los márgenes en el documento
        const marginStyles = `
          <style>
            @page {
              size: A4;
              margin: 1cm 1cm 1cm 1cm; /* Márgenes de 1 cm en todos los lados */
            }
          </style>
        `;

        // Insertar los estilos en la cabecera del documento
        const updatedContent = data.replace(
          '</head>',
          `${marginStyles}</head>`
        );

        // Reemplazos dinámicos
        const replacements = [
          { key: 'titulo', value: 'Mi Título Reemplazado' },
          { key: 'subtitulo', value: 'Subtítulo reemplazado' },
          { key: 'descripcion', value: 'Esta es una descripción reemplazada' },
        ];

        // Reemplazar los valores en la plantilla
        const finalContent = this.replacePlaceholders(
          updatedContent,
          replacements
        );

        // Generar y descargar el documento
        const blob = new Blob(['\ufeff', finalContent], {
          type: 'application/msword',
        });

        const url = URL.createObjectURL(blob);
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'DocumentoGenerado.doc';
        downloadLink.click();

        URL.revokeObjectURL(url);
      },
      (error) => {
        console.error('Error al cargar la plantilla HTML', error);
      }
    );
  }

  // Función para reemplazar los placeholders en la plantilla
  replacePlaceholders(
    content: string,
    replacements: { key: string; value: string }[]
  ): string {
    replacements.forEach((replacement) => {
      const regex = new RegExp(`{{${replacement.key}}}`, 'g');
      content = content.replace(regex, replacement.value);
    });
    return content;
  }
}
