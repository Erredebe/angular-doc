import { Component } from '@angular/core';
import { LocalStorageKeys } from '../local-storage/utils/local-storage.helper';

@Component({
  selector: 'app-docx-uploader',
  templateUrl: './docx-uploader.component.html',
  styleUrls: ['./docx-uploader.component.scss'],
})
export class DocxUploaderComponent {
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        const fileContent = reader.result as string;

        // Convertir el contenido a base64
        const base64Content = btoa(fileContent);

        // Guardar en local storage
        localStorage.setItem(LocalStorageKeys.PLANTILLA, base64Content);

        alert('El archivo .docx ha sido guardado en el almacenamiento local.');
      };

      reader.onerror = (error) => {
        console.error('Error al leer el archivo:', error);
        alert(
          'Hubo un error al leer el archivo. Por favor, inténtelo de nuevo.'
        );
      };

      reader.readAsBinaryString(file); // Leer el archivo como binario
    }
  }
}
