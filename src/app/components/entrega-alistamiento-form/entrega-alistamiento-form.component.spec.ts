import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaAlistamientoFormComponent } from './entrega-alistamiento-form.component';

describe('EntregaAlistamientoFormComponent', () => {
  let component: EntregaAlistamientoFormComponent;
  let fixture: ComponentFixture<EntregaAlistamientoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntregaAlistamientoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaAlistamientoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
