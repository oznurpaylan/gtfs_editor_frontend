import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FareTransferRuleComponent } from './fare-transfer-rule.component';

describe('FareTransferRuleComponent', () => {
  let component: FareTransferRuleComponent;
  let fixture: ComponentFixture<FareTransferRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FareTransferRuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FareTransferRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
