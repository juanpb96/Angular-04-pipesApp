import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /* Pipes won't mutate the data just modify its display on the view */  
  name: string = 'juan bonilla';
  value: number = 1000;
  obj = {
    name : 'juan bonilla'
  }

  showName() {
    console.log(this.name);
    console.log(this.value);
    console.log(this.obj);
  }
}
