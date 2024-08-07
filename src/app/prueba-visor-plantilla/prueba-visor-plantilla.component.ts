import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prueba-visor-plantilla',
  templateUrl: './prueba-visor-plantilla.component.html',
  styleUrls: ['./prueba-visor-plantilla.component.scss'],
})
export class PruebaVisorPlantillaComponent implements AfterViewInit {
  @ViewChild('iframe') iframe!: ElementRef;

  htmlContent: string = '';

  constructor(private http: HttpClient) {
    this.loadHtmlContent();
  }

  ngAfterViewInit(): void {
    this.updateIframeContent();
  }

  loadHtmlContent() {
    this.http.get('assets/plantilla.html', { responseType: 'text' }).subscribe(
      (data) => {
        this.htmlContent = data;
        const replacements = [
          { key: 'titulo', value: 'Mi Título Reemplazado' },
          { key: 'subtitulo', value: 'Subtítulo remplazado' },
          { key: 'descripcion', value: 'Esta es una descripción reemplazada' },
        ];
        this.htmlContent = this.replacePlaceholders(
          this.htmlContent,
          replacements
        );
        this.updateIframeContent();
      },
      (error) => {
        console.error('Error al cargar el archivo HTML', error);
      }
    );
  }

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

  updateIframeContent() {
    const iframe = this.iframe.nativeElement;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

    if (iframeDoc) {
      iframeDoc.open();
      iframeDoc.write(this.htmlContent);
      iframeDoc.close();
    } else {
      console.error('No se pudo acceder al documento del iframe.');
    }
  }
}
