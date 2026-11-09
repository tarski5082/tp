import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionHeader } from './mission-header';

describe('MissionHeader', () => {
  let component: MissionHeader;
  let fixture: ComponentFixture<MissionHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(MissionHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
