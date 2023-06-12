import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopAreaComponent } from './stop-area.component';

describe('StopAreaComponent', () => {
  let component: StopAreaComponent;
  let fixture: ComponentFixture<StopAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
