import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DooxToolTemplateGeneratorComponent } from './doox-tool-template-generator.component';

describe('DooxToolTemplateGeneratorComponent', () => {
  let component: DooxToolTemplateGeneratorComponent;
  let fixture: ComponentFixture<DooxToolTemplateGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DooxToolTemplateGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DooxToolTemplateGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
