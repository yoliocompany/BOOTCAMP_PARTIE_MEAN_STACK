import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../../core/services/project.service';
import { KanbanComponent } from './kanban/kanban.component';

@Component({
  selector: 'app-previewproject',
  standalone: true,
  imports: [KanbanComponent],
  templateUrl: './previewproject.component.html',
  styleUrl: './previewproject.component.css'
})
export class PreviewprojectComponent {

  project: any;
  id: any;
  constructor(private _act: ActivatedRoute, private _project: ProjectService){}

  ngOnInit(): void {
    this.id = this._act.snapshot.paramMap.get('id');

    this._project.preview(this.id).subscribe({
      next: (res)=>{
        this.project = res;
        console.log(res);
        
      }
    })
  }

}
