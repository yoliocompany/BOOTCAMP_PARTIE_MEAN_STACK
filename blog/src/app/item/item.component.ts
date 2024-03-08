import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input() post: any;

  @Output() deleteMe = new EventEmitter(); 


  supp(){
    this.deleteMe.emit(this.post.id);
  }

}
