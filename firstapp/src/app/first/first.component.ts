import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  article = {
    image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*HdwNFQOaTJBu26gEddg8gw.png',
    title: 'Some big things are happening next week on November 6th 🎉',
    description: 'Weve been hard at work on some very special updates to Angular. You dont want to miss what we have planned.'
  }



}
