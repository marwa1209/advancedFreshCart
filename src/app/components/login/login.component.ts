import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { InputComponent } from '../../shared/input/input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, InputComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  message: string = '';
  isValid: boolean = true;
  isLoading: boolean = false;
  token: string = '';

  private _FormBuilder = inject(FormBuilder);
  private _AuthService = inject(AuthService);
  private _Router = inject(Router);

  loginForm: FormGroup = this._FormBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  handleSubmit() {
    this.isLoading = true;
    if (this.loginForm.valid) {
      this._AuthService.signin(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.message == 'success') {
            this.isLoading = false;
            this.message = 'User logined successfully';
            this.token = response.token;
            localStorage.setItem('etoken', response.token);
            this._AuthService.decodeUser();
            this._Router.navigate(['/home']);
            console.log(this._AuthService.userInfo);

          }
          console.log(response);
        },
        error: (error) => {
          this.message = error.error.message;
          this.isLoading = false;
          this.isValid = false;
        },
      });
    } else {
      this.isValid = false;
      this.message = `the form is invalid`;
    }
  }
}
