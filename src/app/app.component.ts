import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /* Pipes won't mutate the data just modify its display on the view */  
  // name: string = 'juan bonilla';
  // value: number = 1000;
  // obj = {
  //   name : 'juan bonilla'
  // }

  // showName() {
  //   console.log(this.name);
  //   console.log(this.value);
  //   console.log(this.obj);
  // }

  /* To insert an animation when clicking buttons */
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  
}
