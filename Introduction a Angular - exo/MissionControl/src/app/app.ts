import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MissionHeader} from './Component/mission-header/mission-header';
import { MissionStatus } from './Component/mission-status/mission-status';
import { AstronautOne } from './Component/astronaut-one/astronaut-one';
import { AstronautTwo } from './Component/astronaut-two/astronaut-two';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MissionHeader,MissionStatus,AstronautOne,AstronautTwo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('MissionControl');
}
