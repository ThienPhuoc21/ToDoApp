import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Task from './Task';
@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})


export class TodolistComponent {
  public listTask: Task[] = []
  public editPosition = -1
  public http = inject(HttpClient)
  constructor() {

  }
  ngOnInit() {
    this.getTasks()
  }
  getTasks(): void {
    this.http.get("http://localhost:3000/api/tasks/get-all").subscribe((list: any) => {
      this.listTask = list
      this.listTask.sort((a, b) => a.id - b.id)
    })

  }
  onSubmit(form: NgForm) {
    let temp = {
      name: form.controls['name'].value,
      detail: form.controls['decription'].value,
      time: form.controls['time'].value,
      isCompleted: false
    }
    this.http.post("http://localhost:3000/api/tasks/create", temp).subscribe((list: any) => {
      this.listTask.push(list)
    })
  }
  onDelete(id: number) {
    console.log(id)
    this.http.delete("http://localhost:3000/api/tasks/delete" + "/" + `${id}`)
      .subscribe(() => {
        let temp = this.listTask.filter(item => item.id !== id)
        this.listTask = temp.sort((a, b) => a.id - b.id)
      })
  }
  onEdit(i: number) {
    this.editPosition = i
  }
  onSave(i: number, id: number) {
    this.http.patch("http://localhost:3000/api/tasks/update/" + `${id}`, this.listTask[i])
      .subscribe(() => {
        this.editPosition = -1
        this.getTasks()
      })
  }
}

