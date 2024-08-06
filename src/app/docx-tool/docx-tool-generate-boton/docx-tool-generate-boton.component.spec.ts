import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocxToolGenerateBotonComponent } from './docx-tool-generate-boton.component';

describe('DocxToolGenerateBotonComponent', () => {
  let component: DocxToolGenerateBotonComponent;
  let fixture: ComponentFixture<DocxToolGenerateBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocxToolGenerateBotonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocxToolGenerateBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
