import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {


  todos$ = new BehaviorSubject([]);



  constructor() { }
}
