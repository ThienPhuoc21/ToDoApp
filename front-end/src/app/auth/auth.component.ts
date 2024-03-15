import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  public mode = true;
  public username = "";
  public password = "";
  public confirmPassword = "";
  onChangeMode() {
    this.mode = !this.mode
  }
  onSignUpSubmit(form: NgForm) {

  }
  onSignInSubmit(form: NgForm) {

  }
}
