import { Component } from '@angular/core';
import { DocGeneratorService } from './doc-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private docGeneratorService: DocGeneratorService) {}

  downloadTableDocument() {
    this.docGeneratorService.generateTableDocument();
  }

  downloadDocument(): void {
    this.docGeneratorService.generateWordDocument();
  }
  downloadLandscape(): void {
    this.docGeneratorService.createLandscapeDocument();
  }
}
