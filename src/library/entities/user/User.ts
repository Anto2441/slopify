interface IUser {
  display_name: string;
  id: string;
}

export class User implements IUser {
  public display_name: string = "";
  public id: string = "";
}
