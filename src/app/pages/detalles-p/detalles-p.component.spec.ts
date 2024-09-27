import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPComponent } from './detalles-p.component';

describe('DetallesPComponent', () => {
  let component: DetallesPComponent;
  let fixture: ComponentFixture<DetallesPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
