export interface IAgreement {
  id?: number;
  end_data: Date;
  initial_data: Date;
  value: number;
  building: number;
  tenant: number;
  resident: number;
}

export interface IAgreements extends Array<IAgreement> {}
