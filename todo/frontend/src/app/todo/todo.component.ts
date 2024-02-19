import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from '../create/create.component';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ FormsModule, CreateComponent, ListComponent ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

 
}
