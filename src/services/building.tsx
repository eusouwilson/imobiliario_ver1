/* eslint-disable camelcase */

import { api } from "./server";
import { IBuilding } from "interfaces/index";

export const postBuilding = async (building: IBuilding) => {
  try {
    const { data } = await api.post("building", {
      address: building.address,
      complement: building.complement,
      district: building.district,
      city: building.city,
      uf: building.uf,
      cep: building.cep,
      proprietary: building.proprietary,
    });
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};

export const putBuilding = async (building: IBuilding) => {
  try {
    const { data } = await api.put(`building/${building.id}`, {
      address: building.address,
      complement: building.complement,
      district: building.district,
      city: building.city,
      uf: building.uf,
      cep: building.cep,
      proprietary: building.proprietary,
    });
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};

export const getBuildings = async () => {
  try {
    const { data } = await api.get("building");
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};

export const searchBuildingByProprietary = async (proprietary: number) => {
  try {
    const { data } = await api.get(`building/search/${proprietary}`);
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};

export const getBuilding = async (id: number) => {
  try {
    const { data } = await api.get(`building/${id}`);
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};
