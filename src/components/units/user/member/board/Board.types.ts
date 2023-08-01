export interface IFetchMember {
  id: string;
  email: string;
  name: string;
  phone: string;
  birth: string;
  date: string;
  rentalPassword: string;
  address: IAddressType;
  cardInfo: ICardInfoType;
  use: IUseType;
}

export interface IAddressType {
  zipcode: string;
  addressFirst: string;
  addressSecond: string;
}

export interface ICardInfoType {
  type: string;
  number: string;
}

export interface IUseType {
  distance: string;
  minute: string;
}

export interface IWidthValue {
  widthValue: string;
}
