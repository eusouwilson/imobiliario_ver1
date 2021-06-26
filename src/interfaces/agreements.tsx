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

export const defaultAgreement: IAgreement = {
  end_data: null,
  initial_data: null,
  value: null,
  building: null,
  tenant: null,
  resident: null,
};
