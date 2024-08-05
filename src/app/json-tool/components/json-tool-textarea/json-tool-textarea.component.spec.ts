import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonToolTextareaComponent } from './json-tool-textarea.component';

describe('JsonToolTextareaComponent', () => {
  let component: JsonToolTextareaComponent;
  let fixture: ComponentFixture<JsonToolTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonToolTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonToolTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
