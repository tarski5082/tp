import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautTwo } from './astronaut-two';

describe('AstronautTwo', () => {
  let component: AstronautTwo;
  let fixture: ComponentFixture<AstronautTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstronautTwo],
    }).compileComponents();

    fixture = TestBed.createComponent(AstronautTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
