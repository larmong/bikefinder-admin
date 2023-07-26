import Search from "../../search/Search.container";
import { FaBell } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { Icon, IconGroup, Wrapper } from "./Header.style";

export default function Header() {
  return (
    <Wrapper>
      <Search />
      <IconGroup>
        <Icon>
          <MdDashboardCustomize />
        </Icon>
        <Icon>
          <FaBell />
        </Icon>
      </IconGroup>
    </Wrapper>
  );
}
