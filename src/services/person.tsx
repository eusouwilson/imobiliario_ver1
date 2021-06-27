/* eslint-disable camelcase */
import { api } from "./server";
import { IPerson } from "../interfaces/person";

export const postPerson = async (person: IPerson) => {
  try {
    const { data } = await api.post("person", {
      name: person.name,
      cpf: person.cpf,
      address: person.address,
      district: person.district,
      city: person.city,
      uf: person.uf,
      phone: person.phone,
      cnpj: person.cnpj,
      email: person.email,
      bank: person.bank,
      account: person.account,
      agency: person.agency,
      cep: person.cep,
      type: person.type ? "J" : "F",
      nacionality: person.nacionality,
      marital_status: person.marital_status,
    });
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};

export const putPerson = async (person: IPerson) => {
  try {
    const { data } = await api.put(`person/${person.id}`, {
      name: person.name,
      cpf: person.cpf,
      address: person.address,
      district: person.district,
      city: person.city,
      uf: person.uf,
      phone: person.phone,
      cnpj: person.cnpj,
      email: person.email,
      bank: person.bank,
      account: person.account,
      agency: person.agency,
      cep: person.cep,
      type: person.type ? "J" : "F",
      nacionality: person.nacionality,
      marital_status: person.marital_status,
    });
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};

export const getPersons = async () => {
  try {
    const { data } = await api.get("person");
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};

export const searchPersonByName = async (name: string) => {
  try {
    const { data } = await api.get(`person/searchByName/${name}`);
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};

export const getPerson = async (id: number) => {
  try {
    const { data } = await api.get(`person/${id}`);
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};
