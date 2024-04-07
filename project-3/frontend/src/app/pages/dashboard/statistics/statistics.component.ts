import { Component } from '@angular/core';
import { ClientService } from '../../../core/services/client.service';
import { ProjectService } from '../../../core/services/project.service';
import { UserService } from '../../../core/services/user.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [
   
    NgxChartsModule
  ],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {

  clients: any;
  projects: any;
  users: any;

  // chart1 options

  saleData = [

    { name: "projects", value: 0 },
    { name: "users", value: 0 },
    { name: "clients", value: 0 }
    
  ];

  lineChartData = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        },
        {
          "name": "2013",
          "value": 940000
        },
        {
          "name": "2014",
          "value": 128940000
        }
      ]
    }
  ]

  constructor( private _client: ClientService, private _project: ProjectService, private _user: UserService ){}

  ngOnInit(): void {
    
    this.getAllClients();
    this.getAllProjects();
    this.getAllUsers();

  }

  getAllUsers(){
    this._user.list().subscribe({
      next: (res)=>{
        this.users = res;
        this.saleData[1].value = this.users.length;
      }
    })
  }

  getAllProjects(){
    this._project.list().subscribe({
      next: (res)=>{
        this.projects = res;
        this.saleData[0].value = this.projects.length;
      }
    })
  }

  getAllClients(){
    this._client.list().subscribe({
      next: (res)=>{
        this.clients = res;
        this.saleData[2].value = this.clients.length
      }
    })
  }

}
