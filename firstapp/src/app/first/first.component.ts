import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {
  
  articles = [

    {
      title: 'QDLKJQSD QSDLKQJDQLKSD',
      description: 'lkqsdjqlkdqs dqsdlkqjds qsdqslkdjqsd',
      likes: 22
    },
    {
      title: 'LJDQSD LQSKDJQSD LKJQSD QSDLKAZE',
      description: 'lkqsdjqlkdqs dqsdlkqjds qsdqslkdjqsd',
      likes: 222
    },
    {
      title: 'AZEOIAZE KZEHALZE SQDLKQSD .?ZENAZLEKJAZE L',
      description: 'lkqsdjqlkdqs dqsdlkqjds qsdqslkdjqsd',
      likes: 11
    },
    {
      title: 'QDL AEAE AZEA E  AE A ZE  AZE  AZ E AEZ',
      description: 'lkqsdjqlkdqs dqsdlkqjds qsdqslkdjqsd',
      likes: 99
    },
    {
      title: 'QDLK AZE AZE   ZAE AZE AZ E AZE  AZE AZEAZEAZ E AZE ',
      description: 'lkqsdjqlkdqs dqsdlkqjds qsdqslkdjqsd',
      likes: 544
    },


  ]

}
