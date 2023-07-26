import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
`;

export const IconGroup = styled.div`
  margin-left: auto;
  display: flex;
  gap: 10px;
`;
export const Icon = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background: #ffffff;
  border-radius: 50%;
  cursor: pointer;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 40%;
    color: #7a797dff;
  }
`;
