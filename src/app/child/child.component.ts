import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from '../model/person.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  pers!: Person;

  @Output()
  outputVar: EventEmitter<Person> = new EventEmitter<Person>();

  sendFullNameToParent(){
    this.outputVar.emit(this.pers)
  }
}
