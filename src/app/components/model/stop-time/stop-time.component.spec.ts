import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopTimeComponent } from './stop-time.component';

describe('StopTimeComponent', () => {
  let component: StopTimeComponent;
  let fixture: ComponentFixture<StopTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
