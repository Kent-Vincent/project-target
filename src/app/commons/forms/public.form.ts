import { FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Form } from './base.form';
export class LoginForm extends Form {
  constructor() {
    const fields: any = {
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    }
    super(fields);
  }
}