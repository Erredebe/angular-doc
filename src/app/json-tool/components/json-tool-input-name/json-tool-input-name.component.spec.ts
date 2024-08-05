import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonToolInputNameComponent } from './json-tool-input-name.component';

describe('JsonToolInputNameComponent', () => {
  let component: JsonToolInputNameComponent;
  let fixture: ComponentFixture<JsonToolInputNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonToolInputNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonToolInputNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
