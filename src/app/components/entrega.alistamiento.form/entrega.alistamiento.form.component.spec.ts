import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entrega.Alistamiento.FormComponent } from './entrega.alistamiento.form.component';

describe('Entrega.Alistamiento.FormComponent', () => {
  let component: Entrega.Alistamiento.FormComponent;
  let fixture: ComponentFixture<Entrega.Alistamiento.FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Entrega.Alistamiento.FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Entrega.Alistamiento.FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
