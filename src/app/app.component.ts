import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  private list = new TodoList("James", [
    new TodoItem("Meet John"),
    new TodoItem("Get Flowers"),
    new TodoItem("Collect Tickets", true)
  ])
  get username(): string{
    return this.list.user;
  }
  get itemCount(): number{
    return this.list.items.filter(item => this.showComplete || !item.complete).length;
  }
  get items():readonly TodoItem[]{
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }
  addItem(newItem){
    if(newItem != ""){
      this.list.addItem(newItem.value);
      newItem.value = "";
    }

  }
  showComplete: boolean = false;
}
