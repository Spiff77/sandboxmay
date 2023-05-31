import { Component } from '@angular/core';
import {Person} from '../model/person.model';

@Component({
  selector: 'app-main-parent',
  templateUrl: './main-parent.component.html',
  styleUrls: ['./main-parent.component.css']
})
export class MainParentComponent {
  firstname = 'Thomas'
  personSelected:Person | undefined


  myPerson1: Person = {
    age: 37,
    lastname: 'Lhomme',
    firstname: 'Thomas'
  }

  myPerson2: Person = {
    age: 33,
    lastname: 'Balavoine',
    firstname: 'Daniel'
  }

  getInfoFromChild(Person: Person){
   this.personSelected = Person;
  }
}
