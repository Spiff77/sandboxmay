import {Component, HostListener} from '@angular/core';
import {Person} from '../model/person.model';

@Component({
  selector: 'app-main-parent',
  templateUrl: './main-parent.component.html',
  styleUrls: ['./main-parent.component.css']
})
export class MainParentComponent {
  firstname = 'Thomas'
  personSelected:Person | undefined

  persons: Person[] = [
    {
      age: 37,
      lastname: 'Lhomme',
      firstname: 'Thomas'
    },
    {
      age: 14,
      lastname: 'Balavoine',
      firstname: 'Daniel'
    }
  ]


  @HostListener('click')
  addPerson(){
    this.persons.push({firstname:'UNKNOW', lastname: 'UNKNOW', age:0})
  }

  getInfoFromChild(Person: Person){
   this.personSelected = Person;
  }
}
