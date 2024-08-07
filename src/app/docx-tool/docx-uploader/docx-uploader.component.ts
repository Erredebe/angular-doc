import { Component } from '@angular/core';
import { StorageService } from '../../core/storage/storage.service';
import { StorageKeys } from '../../core/storage/utils/storage.helpers';

@Component({
  selector: 'app-docx-uploader',
  templateUrl: './docx-uploader.component.html',
  styleUrls: ['./docx-uploader.component.scss'],
})
export class DocxUploaderComponent {
  constructor(private storageService: StorageService) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const base64Content = this.arrayBufferToBase64(arrayBuffer);

        // Guardar en local storage
        this.storageService.setStorageItem(
          StorageKeys.PLANTILLA,
          base64Content
        );

        alert('El archivo .docx ha sido guardado en el almacenamiento local.');
      };

      reader.onerror = (error) => {
        console.error('Error al leer el archivo:', error);
        alert(
          'Hubo un error al leer el archivo. Por favor, inténtelo de nuevo.'
        );
      };

      reader.readAsArrayBuffer(file); // Leer el archivo como ArrayBuffer
    }
  }

  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
}
