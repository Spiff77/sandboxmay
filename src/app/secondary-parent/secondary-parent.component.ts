import {Component, HostListener, OnInit} from '@angular/core';
import {NameService} from '../name.service';

@Component({
  selector: 'app-secondary-parent',
  templateUrl: './secondary-parent.component.html',
  styleUrls: ['./secondary-parent.component.css']
})
export class SecondaryParentComponent implements OnInit{

  names: string[] = []

  constructor(public ns: NameService) {}

  ngOnInit(): void {
    this.names = this.ns.names
  }

  @HostListener('click')
  addName() {
    this.ns.addName("Matthew")
  }

}
