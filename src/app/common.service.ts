import { Injectable } from '@angular/core';
import {Search} from './search';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private messageSource = new BehaviorSubject(new Search());
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(search: Search) {
    this.messageSource.next(search);
  }
}
