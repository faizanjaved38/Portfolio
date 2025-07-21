import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRobot, faPlug, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './common.component.html',
})
export class CommonComponent {
  faRobot = faRobot;
  faLaptopCode = faLaptopCode;
  faPlug = faPlug;
}
