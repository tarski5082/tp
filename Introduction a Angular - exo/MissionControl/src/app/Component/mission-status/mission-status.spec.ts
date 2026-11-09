import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionStatus } from './mission-status';

describe('MissionStatus', () => {
  let component: MissionStatus;
  let fixture: ComponentFixture<MissionStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionStatus],
    }).compileComponents();

    fixture = TestBed.createComponent(MissionStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
