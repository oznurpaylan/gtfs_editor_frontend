import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FareAttributeComponent } from './fare-attribute.component';

describe('FareAttributeComponent', () => {
  let component: FareAttributeComponent;
  let fixture: ComponentFixture<FareAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FareAttributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FareAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
