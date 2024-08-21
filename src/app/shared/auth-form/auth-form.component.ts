import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { confirmPassword } from '../validators/validators';

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
})
export class AuthFormComponent {
  @Input() isLogin: boolean = false;
  @Output() submit = new EventEmitter<void>();

  private _FormBuilder = inject(FormBuilder);

  authForm: FormGroup = this._FormBuilder.group(
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
    this.submit.emit();
  }
  //getters allow you to define methods that act like properties
  get isValid(): boolean {
    return this.authForm.valid;
  }
}
