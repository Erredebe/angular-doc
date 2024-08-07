import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaVisorPlantillaComponent } from './prueba-visor-plantilla.component';

describe('PruebaVisorPlantillaComponent', () => {
  let component: PruebaVisorPlantillaComponent;
  let fixture: ComponentFixture<PruebaVisorPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaVisorPlantillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaVisorPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
