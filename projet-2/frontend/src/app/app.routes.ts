import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListComponent } from './home/list/list.component';
import { AjoutComponent } from './home/ajout/ajout.component';
import { UpdateComponent } from './home/update/update.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', canActivate: [ authGuard ] ,component: HomeComponent, children: [

    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ListComponent },
    { path: 'ajout', component: AjoutComponent },
    { path: 'update/:id', component: UpdateComponent }

  ] },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },

  { path: '**', component: NotfoundComponent },
];
