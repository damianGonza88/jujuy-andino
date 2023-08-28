import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteActualizarComponent } from './componente-actualizar.component';

describe('ComponenteActualizarComponent', () => {
  let component: ComponenteActualizarComponent;
  let fixture: ComponentFixture<ComponenteActualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteActualizarComponent]
    });
    fixture = TestBed.createComponent(ComponenteActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
