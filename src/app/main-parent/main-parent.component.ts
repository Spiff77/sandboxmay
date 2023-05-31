import { Component } from '@angular/core';
import {Person} from '../model/person.model';

@Component({
  selector: 'app-main-parent',
  templateUrl: './main-parent.component.html',
  styleUrls: ['./main-parent.component.css']
})
export class MainParentComponent {
  firstname = 'Thomas'

  myPerson: Person = {
    age: 37,
    lastname: 'Lhomme',
    firstname: 'Thomas'
  }
}
