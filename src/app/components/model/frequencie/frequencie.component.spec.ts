import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencieComponent } from './frequencie.component';

describe('FrequencieComponent', () => {
  let component: FrequencieComponent;
  let fixture: ComponentFixture<FrequencieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequencieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequencieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
