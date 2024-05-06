export class Users{
  constructor(
    public email: string,
    public first_name: string,
    public last_name: string,
    public avatar: string,
  ) {}
}

export class CurrentUserLoggedName{
  constructor(
    public first_name: string,
    public avatar: string,
  ) {}
}

export class CurrentUserLoggedAvatar{
  constructor(
    public first_name: string,
    public avatar: string,
  ) {}
}

export interface Login{
  email: string;
  password: string;
}
export interface Auth{
  token: string;
  key: string;
}