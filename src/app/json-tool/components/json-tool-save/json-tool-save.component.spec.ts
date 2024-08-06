import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonToolSaveComponent } from './json-tool-save.component';

describe('JsonToolSaveComponent', () => {
  let component: JsonToolSaveComponent;
  let fixture: ComponentFixture<JsonToolSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonToolSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonToolSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
