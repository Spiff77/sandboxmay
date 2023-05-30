import { Component } from '@angular/core';
import {Person} from './model/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ma sandbox'
  name = 'Thomas Lhomme'
  textColor = 'green'
  hiddenTitle = false
  count = 0;
  person: Person = {
    age: 37,
    firstname: 'Thomas',
    lastname:'Lhomme'
  }

  increaseCount() {
    this.count++
  }

}
