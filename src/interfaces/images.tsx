export interface IImage {
  path: string;
  building_id: number;
}

export interface IImages extends Array<IImage> {}
