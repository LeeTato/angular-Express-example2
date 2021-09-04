import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Todo } from 'src/app/model/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todos$!: Observable<Todo[]>;

  constructor(private todosService:TodosService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    //  this.todos$ = this.todosService.getTodos();
     this.todos$ = this.todosService.getTodos().pipe(map(array=>array.filter(item=>item.userId===1)))

  }

}
