import {Component, OnDestroy, OnInit} from '@angular/core';
import {NameService} from '../name.service';
import {HttpClient} from '@angular/common/http';
import {concatAll, delay, from, interval, map, mergeMap, of, Subscription, toArray} from 'rxjs';
import {UserService} from '../user.service';

export interface User {
  id: number,
  name: string,
  username: string;
  boss?: User;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy{

  users: User[] = []
  subscription!: Subscription;

  constructor(private nameService: NameService, private uService: UserService) {}

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(v => console.log(v))

    this.uService.findAll().pipe(
      map(v => {
        v.forEach(w => w.username += '$')
        return v;
      }))
      .subscribe(v => this.users = v)
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }
}
