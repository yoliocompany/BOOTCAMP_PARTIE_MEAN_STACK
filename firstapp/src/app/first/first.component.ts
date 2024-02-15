import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {

  hero = {
    image: 'assets/card-img.png',
    name: 'Luffy',
    power: 22,
    description: 'QSLKDJQSD QSDLQKSJDQS DQSLKDJ AZEKLJKLAZJEA LKQSDJLKQD'
  }


  data = {
    image: '',
    name: '',
    power: 0,
    description: ''
  }

  change(){
    this.hero = this.data;
    this.data = {
      image: '',
      name: '',
      power: 0,
      description: ''
    }
  }


}
