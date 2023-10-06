import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationAddressComponent } from './station-address.component';

describe('StationAddressComponent', () => {
  let component: StationAddressComponent;
  let fixture: ComponentFixture<StationAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
