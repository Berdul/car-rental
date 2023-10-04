import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationRowComponent } from './station-row.component';

describe('StationRowComponent', () => {
  let component: StationRowComponent;
  let fixture: ComponentFixture<StationRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
