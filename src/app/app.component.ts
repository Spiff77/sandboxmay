import {Component, OnInit} from '@angular/core';
import {Person} from './model/person.model';
import {NameService} from './name.service';
import {BehaviorSubject, filter, interval, map, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{








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

  names: string[] = ['Giovanni', 'Daniel', 'Moncef', 'Florian']

  color = 'blue';

  constructor(private nameService: NameService) {}

  ngOnInit() {
    interval(1000)
      .pipe(
        filter(v => v % 10 == 0),
        map(v => v * 5)
      ).subscribe(v => console.log(v))

    let s:BehaviorSubject<string> = new BehaviorSubject('val');

    s.subscribe(v => console.log(v))
    s.next('Toto')
    s.next('Toto')
    s.next('Toto')


    this.names = this.nameService.names


  }

  increaseCount() {
    this.count++
    this.color = 'yellow'
  }

  changeColor(event: Event) {
    this.color = (event.target as HTMLInputElement).value
  }


}
