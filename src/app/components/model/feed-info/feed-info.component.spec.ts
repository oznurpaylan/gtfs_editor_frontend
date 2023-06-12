import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedInfoComponent } from './feed-info.component';

describe('FeedInfoComponent', () => {
  let component: FeedInfoComponent;
  let fixture: ComponentFixture<FeedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
