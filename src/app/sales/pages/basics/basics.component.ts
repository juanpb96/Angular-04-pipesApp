import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  nameLower: string = 'juan';
  nameUpper: string = 'JUAN';
  fullName: string = 'jUaN boNiLLa';

  date: Date = new Date(); // Today

}
