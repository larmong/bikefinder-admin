import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const isNavOpenState = atom({
  key: "isNavOpenState",
  default: false,
});
