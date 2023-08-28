import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteContactosComponent } from './componente-contactos.component';

describe('ComponenteContactosComponent', () => {
  let component: ComponenteContactosComponent;
  let fixture: ComponentFixture<ComponenteContactosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteContactosComponent]
    });
    fixture = TestBed.createComponent(ComponenteContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
