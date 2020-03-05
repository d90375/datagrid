enum AgeCategory {
  CHILDREN = 'children',
  TEENAGER = 'teenager',
  MAM = 'man',
  ELDERLY = 'elderly',
  GRANDDAD = 'granddad',
  OLDMAN = 'oldMan',
}

interface Address {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
}

export interface Row {
  id: number;
  firstName: string;
  lastName: string;
  address: Address;
  status: boolean;
  ageCategory: any;
  salary: number;
  distance: number;
  hackedDate: string;
}

export interface Column {
  id: 'id' | 'firstName' | 'lastName' | 'address' | 'status' | 'ageCategory' | 'salary' | 'distance' | 'hackedDate';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center' | 'left';
  format?: (value: number) => string;
}