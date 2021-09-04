import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
public todos$!: Observable<Todo[]>;// create observable array 
  constructor(private api: ApiService) { }

  getTodos(){
    return this.api.get<Todo[]>('/todos')
  }
}
