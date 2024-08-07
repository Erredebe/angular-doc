import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGeneradorPlantillaComponentComponent } from './prueba-generador-plantilla-component.component';

describe('PruebaGeneradorPlantillaComponentComponent', () => {
  let component: PruebaGeneradorPlantillaComponentComponent;
  let fixture: ComponentFixture<PruebaGeneradorPlantillaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaGeneradorPlantillaComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGeneradorPlantillaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
