import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAgregarComponent } from './componente-agregar.component';

describe('ComponenteAgregarComponent', () => {
  let component: ComponenteAgregarComponent;
  let fixture: ComponentFixture<ComponenteAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteAgregarComponent]
    });
    fixture = TestBed.createComponent(ComponenteAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
