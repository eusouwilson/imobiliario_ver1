export interface IPerson {
  id?: number;
  name: string;
  CPF?: number;
  address: string;
  district: string;
  city: string;
  uf: string;
  phone: string;
  cnpj?: number;
  email: string;
  bank: string;
  account: string;
  agency: string;
  type: string;
}

export interface IPersons extends Array<IPerson> {}
