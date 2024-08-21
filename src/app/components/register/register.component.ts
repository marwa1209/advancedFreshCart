import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControlOptions,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from '../../shared/input/input.component';
import { confirmPassword } from '../../shared/validators/validators';
import { AuthService } from './../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, InputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  message: string = '';
  isValid: boolean = true;
  isLoading: boolean = false;

  private _FormBuilder = inject(FormBuilder);
  private _AuthService = inject(AuthService);
  private _Router = inject(Router);

  registerForm: FormGroup = this._FormBuilder.group(
    {
      name: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(5)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)],
      ],
      rePassword: [''],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
      ],
    },
    { validators: [confirmPassword] } as FormControlOptions
  );

  handleSubmit() {
    this.isLoading = true;
    if (this.registerForm.valid) {
      this._AuthService.signup(this.registerForm.value).subscribe({
        next: (response) => {
          if (response.message == 'success') {
            this.isLoading = false;
            this.message = 'User registered successfully';
            this._Router.navigate(['/login']);
          }
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
