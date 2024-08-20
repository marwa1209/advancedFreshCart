import { FormGroup } from '@angular/forms';

 // Validator function to ensure that the password and rePassword fields match.
  export function confirmPassword(group: FormGroup): void {
    const passwordInput = group.get('password');
    const rePasswordInput = group.get('rePassword');
    if (rePasswordInput?.value == '') {
      rePasswordInput?.setErrors({ required: true });
    } else if (passwordInput?.value !== rePasswordInput?.value) {
      rePasswordInput?.setErrors({ mismatch: true });
    }
  }
