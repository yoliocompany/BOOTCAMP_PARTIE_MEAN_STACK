import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AjoutComponent } from './ajout/ajout.component';
import { UpdateComponent } from './update/update.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [

    { path: '', redirectTo: 'list', pathMatch: 'full' },

    { path: 'list', component: ListComponent },

    { path: 'ajout', component: AjoutComponent },

    { path: 'update/:id', component: UpdateComponent },

    { path: '**', component: NotfoundComponent }


];
