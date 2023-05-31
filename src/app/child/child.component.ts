import {Component, Input} from '@angular/core';
import {Person} from '../model/person.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  pers: Person = {
    age: 0,
    lastname: '',
    firstname: ''
  }

}
