export interface IUser {
  ativo: number;
  id: number;
  name: string;
  email: string;
  token: string;
}

export interface IUsers extends Array<IUser> {}
