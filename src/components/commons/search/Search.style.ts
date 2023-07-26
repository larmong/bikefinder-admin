import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 840px;
  height: 50px;
  margin-right: 50px;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  color: #7a797dff;
  cursor: pointer;
  svg {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
