import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FareLegRuleComponent } from './fare-leg-rule.component';

describe('FareLegRuleComponent', () => {
  let component: FareLegRuleComponent;
  let fixture: ComponentFixture<FareLegRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FareLegRuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FareLegRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
