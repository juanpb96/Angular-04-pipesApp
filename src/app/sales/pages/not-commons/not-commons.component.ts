import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [
  ]
})
export class NotCommonsComponent {

  name: string = 'Ana Frank';
  gender: string = 'female';

  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };

  togglePerson() {
    this.name = this.name === 'Ana Frank' ? 'Juan' :  'Ana Frank';
    this.gender = this.gender === 'female' ? 'male' : 'female';
  }

  // i18Plural
  clients: string[] = ['Marie', 'Gerrard', 'June', 'Alex'];
  clientsMap = {
    '=0': 'there are no clients',
    '=1': 'a client is',
    'other': 'there are # clients'
  }

  deletePerson() {
    this.clients && this.clients.pop();
  }

  // KeyValue Pipe

  persons = {
    name: 'Juan',
    age: 35,
    address: 'Ottawa, Canada'
  }

  // Json Pipe

  heroes = [
    {
      name: 'Superman',
      canFly: true
    },
    {
      name: 'Robin',
      canFly: false
    },
    {
      name: 'Aquaman',
      canFly: false
    }
  ];

  // Async Pipe

  myObservable = interval(5000);

  promiseValue = new Promise( (resolve, reject) => {

    setTimeout( () => {
      resolve( 'We have data on promise' );
    }, 3500 );

  } );

}
