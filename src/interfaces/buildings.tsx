export interface IBuilding {
  id?: number;
  address: string;
  complement: string;
  district: string;
  city: string;
  uf: string;
  cep: string;
  proprietary: number;
}

export interface IBuildings extends Array<IBuilding> {}
