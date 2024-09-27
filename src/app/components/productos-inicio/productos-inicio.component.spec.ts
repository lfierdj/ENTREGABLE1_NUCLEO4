import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosInicioComponent } from './productos-inicio.component';

describe('ProductosInicioComponent', () => {
  let component: ProductosInicioComponent;
  let fixture: ComponentFixture<ProductosInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
