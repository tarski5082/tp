import { Component } from '@angular/core';

@Component({
  selector: 'app-mission-status',
  imports: [],
  templateUrl: './mission-status.html',
  styleUrl: './mission-status.css',
})
export class MissionStatus {
  niveauCarburant: number = 85;
  vitesse: number = 24500;
  distanceRestante: number = 125000000;
  etatVaisseau: string = 'En route';
}
