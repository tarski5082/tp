import { Component } from '@angular/core';

@Component({
  selector: 'app-astronaut-two',
  imports: [],
  templateUrl: './astronaut-two.html',
  styleUrl: './astronaut-two.css',
})
export class AstronautTwo {
  nom: string = 'Emma Wilson';
  age: number = 29;
  role: string = 'Pilote';
  nationalite: string = 'Canadienne';
}
