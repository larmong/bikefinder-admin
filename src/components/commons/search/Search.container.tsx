import { InputSearch, SearchIcon, Wrapper } from "./Search.style";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
    <Wrapper>
      <InputSearch type="text" placeholder="검색어를 입력해주세요." />
      <SearchIcon>
        <FiSearch />
      </SearchIcon>
    </Wrapper>
  );
}
