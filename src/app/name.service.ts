import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  names: string[] = [
    'Philippe', 'Daniel', 'Karima', 'Florian', 'Sébastien'
  ]

  constructor() { }

  addName(name: string){
    this.names.push(name)
  }
}
