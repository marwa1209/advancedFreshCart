import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() label!: string;
  @Input() control!: any;
  @Input() type: string = 'text';
  @Input() id!: string;
  @Input() errorMessages: { [key: string]: string } = {};

  get hasError(): boolean {
    return this.control?.touched && this.control?.invalid;
  }
  get errorMessage(): string | null {
    if (this.hasError) {
      for (const key in this.errorMessages) {
        if (this.control.hasError(key)) {
          return this.errorMessages[key];
        }
      }
    }
    return null;
  }
}
