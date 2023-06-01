import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-say-hello',
  templateUrl: './say-hello.component.html',
  styleUrls: ['./say-hello.component.css']
})
export class SayHelloComponent implements OnInit{

  name = ''

  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // plus léger et au démarrage seulement
    this.name = this.actRoute.snapshot.paramMap.get('name') ?? ''

    // Avec observable
    this.actRoute.paramMap.subscribe( p => this.name = p.get('name') ?? '')

  }

}
