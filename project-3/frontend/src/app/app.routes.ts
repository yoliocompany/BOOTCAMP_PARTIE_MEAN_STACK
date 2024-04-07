import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { StatisticsComponent } from './pages/dashboard/statistics/statistics.component';
import { ClientsComponent } from './pages/dashboard/clients/clients.component';
import { ProjectsComponent } from './pages/dashboard/projects/projects.component';
import { EmployersComponent } from './pages/dashboard/employers/employers.component';
import { ListComponent } from './pages/dashboard/clients/list/list.component';
import { AjoutComponent } from './pages/dashboard/clients/ajout/ajout.component';
import { UpdateComponent } from './pages/dashboard/clients/update/update.component';
import { ListprojectComponent } from './pages/dashboard/projects/listproject/listproject.component';
import { AjoutprojectComponent } from './pages/dashboard/projects/ajoutproject/ajoutproject.component';
import { PreviewprojectComponent } from './pages/dashboard/projects/previewproject/previewproject.component';
import { UpdateprojectComponent } from './pages/dashboard/projects/updateproject/updateproject.component';
import { ListemployersComponent } from './pages/dashboard/employers/listemployers/listemployers.component';
import { AjoutemployersComponent } from './pages/dashboard/employers/ajoutemployers/ajoutemployers.component';
import { UpdateemployersComponent } from './pages/dashboard/employers/updateemployers/updateemployers.component';
import { dashGuard } from './core/guards/dash.guard';
import { loginGuard } from './core/guards/login.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [


    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    { path: 'dashboard', canActivate: [ dashGuard ] , component: DashboardComponent , children: [

        { path: '', redirectTo: 'statistics', pathMatch: 'full' },
        { path: 'statistics', canActivate: [adminGuard] , component: StatisticsComponent },

        { path: 'clients', canActivate: [ adminGuard ] ,component: ClientsComponent , children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ListComponent },
            { path: 'ajout', component: AjoutComponent },
            { path: 'update/:id', component: UpdateComponent }
        ] },

        { path: 'projects', component: ProjectsComponent, children: [

            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ListprojectComponent },
            { path: 'ajout', canActivate: [adminGuard] , component: AjoutprojectComponent },
            { path: 'preview/:id', component: PreviewprojectComponent },
            { path: 'update/:id', canActivate: [adminGuard], component: UpdateprojectComponent }

        ] },

        { path: 'employers', canActivate: [ adminGuard ] , component: EmployersComponent, children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ListemployersComponent },
            { path: 'ajout', component: AjoutemployersComponent },
            { path: 'update/:id', component: UpdateemployersComponent }

        ] }

    ] },

    { path: 'login', canActivate:[ loginGuard ] , component: LoginComponent },

    { path: '**', component: NotfoundComponent }


];
