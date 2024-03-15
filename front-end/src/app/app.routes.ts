import { Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    { path: '', component: AuthComponent },

    { path: '/todolist', component: TodolistComponent }
];