import { Pipe, PipeTransform } from '@angular/core';
import {Person} from './model/person.model';

@Pipe({
  name: 'countletter'
})
export class CountletterPipe implements PipeTransform {

  transform(value: Person, offset?: number): number {
    return value.firstname.length + value.lastname.length + (offset ?? 0);
  }

}
