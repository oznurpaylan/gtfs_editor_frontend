import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FareRuleComponent } from './fare-rule.component';

describe('FareRuleComponent', () => {
  let component: FareRuleComponent;
  let fixture: ComponentFixture<FareRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FareRuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FareRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
