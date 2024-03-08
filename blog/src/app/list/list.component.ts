import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

 constructor( private _post: PostsService ){}

 posts: any;

 ngOnInit(): void {
  
  this._post.getPostList().subscribe({
    next: (res)=>{

      this.posts = res;
      
    }
  })

 }

 delete(id: any){
  console.log(id);
 }


}
