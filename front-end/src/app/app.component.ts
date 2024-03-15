import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { AuthComponent } from './auth/auth.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodolistComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';

}
