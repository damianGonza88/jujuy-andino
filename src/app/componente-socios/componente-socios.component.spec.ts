import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSociosComponent } from './componente-socios.component';

describe('ComponenteSociosComponent', () => {
  let component: ComponenteSociosComponent;
  let fixture: ComponentFixture<ComponenteSociosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteSociosComponent]
    });
    fixture = TestBed.createComponent(ComponenteSociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
