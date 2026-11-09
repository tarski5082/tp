import { Component } from '@angular/core';

@Component({
  selector: 'app-mission-header',
  imports: [],
  templateUrl: './mission-header.html',
  styleUrl: './mission-header.css',
})
export class MissionHeader {
    nomMission: string = 'Ares I';
    destination: string = 'Mars';
    dateDepart: string = '15 novembre 2026'
}
