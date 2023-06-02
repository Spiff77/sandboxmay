import {Component, OnInit} from '@angular/core';
import {Person} from './model/person.model';
import {NameService} from './name.service';
import {BehaviorSubject, filter, interval, map, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {MusicdialogComponent} from './musicdialog/musicdialog.component';

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

  constructor(private matDialog: MatDialog,private nameService: NameService, private http: HttpClient) {}

  ngOnInit() {

    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(v => console.log(v))

    this.names = this.nameService.names
  }

  increaseCount() {
    this.count++
    this.color = 'yellow'
  }

  changeColor(event: Event) {
    this.color = (event.target as HTMLInputElement).value
  }

  openDialog(){
   let dialogRef =  this.matDialog.open(MusicdialogComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
