import { Component } from '@angular/core';

@Component({
  selector: 'app-astronaut-one',
  imports: [],
  templateUrl: './astronaut-one.html',
  styleUrl: './astronaut-one.css',
})
export class AstronautOne {
  nom: string = 'Alex Johnson';
  age: number = 34;
  role: string = 'Commandant';
  nationalite: string = 'Américaine';
}
