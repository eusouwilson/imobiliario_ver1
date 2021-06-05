/* eslint-disable camelcase */

import { api } from "./auth";

export const PostPerson = async (
  name: string,
  cpf: string,
  address: string,
  district: string,
  city: string,
  uf: string,
  phone: string,
  cnpj: string,
  email: string,
  bank: string,
  account: string,
  agency: string,
  cep: string,
  type: string
) => {
  try {
    const { data } = await api.post("person", {
      name,
      cpf,
      address,
      district,
      city,
      uf,
      phone,
      cnpj,
      email,
      bank,
      account,
      agency,
      cep,
      type,
    });
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};

export const GetPerson = async () => {
  try {
    const { data } = await api.get("person");
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};

export const SearchPersonByName = async (name: string) => {
  try {
    const { data } = await api.get(`person/searchByName/${name}`);
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};
