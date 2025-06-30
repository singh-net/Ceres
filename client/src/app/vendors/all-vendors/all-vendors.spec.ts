import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVendors } from './all-vendors';

describe('AllVendors', () => {
  let component: AllVendors;
  let fixture: ComponentFixture<AllVendors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllVendors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllVendors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
