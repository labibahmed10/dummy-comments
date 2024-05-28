// Geo interface
interface Geo {
  lat: string;
  lng: string;
}

// Address interface
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

// Company interface
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

// Main interface
export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
