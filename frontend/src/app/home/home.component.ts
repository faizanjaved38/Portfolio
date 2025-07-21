import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faServer,faRobot,faPlug,faLaptopCode,faSave,faCode} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  faSave = faSave;
  faTablet = faCode;
  faServer = faServer;
  faRobot = faRobot;
  faLaptopCode = faLaptopCode;
  faPlug = faPlug;
}
