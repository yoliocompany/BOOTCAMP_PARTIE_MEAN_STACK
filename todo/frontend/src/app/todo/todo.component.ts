import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  todo = {
    text: ''
  }

  todos = [
    {
      text: 'drink some coffeee'
    },
    {
      text: 'finish product page'
    }
  ]

  add(){
    this.todos.push( this.todo );
    this.todo = {
      text: ''
    }
  }

}
