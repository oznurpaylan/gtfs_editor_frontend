import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecompressComponent } from './decompress.component';

describe('DecompressComponent', () => {
  let component: DecompressComponent;
  let fixture: ComponentFixture<DecompressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecompressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecompressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
