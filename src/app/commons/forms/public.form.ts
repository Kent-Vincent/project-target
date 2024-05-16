import { FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Form } from './base.form';
export class LoginForm extends Form {
  constructor() {
    const fields: any = {
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    };
    super(fields);
  }
}

export class SignupForm extends Form{
  constructor() {
    const fields: any = {
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      re_password: new FormControl(null, [Validators.required]),
    };
    super(fields);
  }
}

export class WorkspaceForm extends Form{
  constructor() {
    const fields: any = {
      workspace_name: new FormControl(null, [Validators.required]),
    };
    super(fields);
  }
}

export class TicketForm extends Form{
  constructor() {
    const fields: any = {
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      attachments: new FormControl(null, [Validators.required]),
      avatar_icon: new FormControl(null, [Validators.required]),
      assignee: new FormControl(null, [Validators.required]),
      due_date: new FormControl(null, [Validators.required]),
      priority: new FormControl(null, [Validators.required]),
      filed_by_avatar_icon: new FormControl(null),
      filed_by: new FormControl(null),
      cover_photo: new FormControl(null),
    };
    super(fields);
  }
}