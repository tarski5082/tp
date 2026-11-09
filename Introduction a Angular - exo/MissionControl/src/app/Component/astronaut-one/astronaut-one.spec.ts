import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautOne } from './astronaut-one';

describe('AstronautOne', () => {
  let component: AstronautOne;
  let fixture: ComponentFixture<AstronautOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstronautOne],
    }).compileComponents();

    fixture = TestBed.createComponent(AstronautOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
