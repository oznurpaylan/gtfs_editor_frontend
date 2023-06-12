import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FareProductComponent } from './fare-product.component';

describe('FareProductComponent', () => {
  let component: FareProductComponent;
  let fixture: ComponentFixture<FareProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FareProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FareProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
