export interface IPropsNavUI {
  isNavOpen: boolean;
  onClickNavOpen: () => void;
  onClickMoveToHome: () => void;
  DASHBOARD_MENU: IDashboardMenuType[];
}

export interface IPropsMenuUI {
  index: number;
  isOpen: boolean;
  el: any;
}

export interface IIsOpen {
  isOpen?: boolean;
  isMenuOpen?: boolean;
  isMenuOn?: boolean;
}

export interface IDashboardMenuType {
  icon: any;
  name: string;
  route: string;
  subMenu?: ISubMenuType[] | [];
}

export interface ISubMenuType {
  name: string;
  route: string;
}
