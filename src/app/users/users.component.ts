import {Component, OnInit} from '@angular/core';
import {NameService} from '../name.service';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs';
import {UserService} from '../user.service';

export interface User {
  name: string,
  username: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users: User[] = []

  constructor(private nameService: NameService, private uService: UserService) {}

  ngOnInit(): void {
    this.uService.findAll()
      .subscribe(v => this.users = v)}

}
