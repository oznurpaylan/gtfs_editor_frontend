import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FareMediaComponent } from './fare-media.component';

describe('FareMediaComponent', () => {
  let component: FareMediaComponent;
  let fixture: ComponentFixture<FareMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FareMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FareMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
