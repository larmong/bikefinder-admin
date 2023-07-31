export interface IFetchMember {
  id: string;
  name: string;
  birth: string;
  phone: string;
  email: string;
  password: string;
  passwordCheck: string;
  rentalPassword: string;
  rentalPasswordCheck: string;
  address: IInputAddress;
  cardInfo: ICardInfoType;
}

export interface IInputAddress {
  zipcode: string;
  addressFirst: string;
  addressSecond: string;
}

export interface ICardInfoType {
  type: string;
  number: string;
}
