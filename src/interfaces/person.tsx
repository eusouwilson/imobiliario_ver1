export interface IPerson {
  id?: number;
  name: string;
  cpf?: string;
  address: string;
  district: string;
  city: string;
  uf: string;
  phone: string;
  cnpj?: string;
  email: string;
  bank: string;
  account: string;
  agency: string;
  type: string;
  cep: string;
}

export interface IPersons extends Array<IPerson> {}

export const personDefault: IPerson = {
  name: "",
  cpf: "",
  address: "",
  district: "",
  city: "",
  uf: "",
  phone: "",
  cnpj: "",
  email: "",
  bank: "",
  account: "",
  agency: "",
  type: "",
  cep: "",
};
