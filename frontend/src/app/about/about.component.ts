import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {

}
const Faizan = "myName";
let Pakistan = "location";
let Software_Development = "background";
let Frontend_Technologies = "expertise";

function showPresentation() {
    console.log(`Hey there!
      I'm ${Faizan}, a passionate software developer currently based in ${Pakistan}.
      My background is rooted in ${Software_Development}, with strong expertise in ${Frontend_Technologies}.
      
      My journey into programming has been nothing short of exciting, and I've devoted myself to mastering various technologies to drive strategic initiatives and build impactful solutions.
      `);
}

showPresentation();
