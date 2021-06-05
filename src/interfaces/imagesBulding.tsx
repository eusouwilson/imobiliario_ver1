export interface IImagesBulding {
  path: Date;
  building_id: number;
  description: string;
  id?: number;
}

export interface IImagesBuldings extends Array<IImagesBulding> {}
