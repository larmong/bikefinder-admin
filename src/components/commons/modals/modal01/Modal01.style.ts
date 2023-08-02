import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background: rgba(0, 0, 0, 0.3);
`;
export const Modal = styled.div`
  padding: 30px;
  width: 1000px;
  background: #fff;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseBtn = styled.button`
  transition: all ease-in 0.2s;
  border-radius: 3px;
  color: #888;
  padding: 3px 7px;
  font-size: 26px;
  :hover {
    background: #eee;
    color: #555;
  }
`;

export const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const ModalTitle = styled.h4`
  font-size: 30px;
  margin-left: 5px;
`;

export const Contents = styled.div`
  margin-top: 20px;
`;
