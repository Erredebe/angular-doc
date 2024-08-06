import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocxUploaderComponent } from './docx-uploader.component';

describe('DocxUploaderComponent', () => {
  let component: DocxUploaderComponent;
  let fixture: ComponentFixture<DocxUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocxUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocxUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
