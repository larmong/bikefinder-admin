import * as S from "../../dashboard/Dashboard.style";
import MemberBoard from "../board/Board.container";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { IFetchMember } from "../board/Board.types";
import { CustomMouseEvent } from "../../../../commons/types/global.types";

export default function Member() {
  const USER_STATE_TYPE = [
    {
      id: 0,
      name: "전체",
      checkedState: true,
    },
    {
      id: 1,
      name: "정상",
      checkedState: false,
    },
    {
      id: 2,
      name: "정지",
      checkedState: false,
    },
  ];

  const [fetchBoard, setFetchBoard] = useState<IFetchMember[]>([]);
  const [filteredBoard, setFilteredBoard] = useState<IFetchMember[]>([]);
  const [userStateType, setUserStateType] = useState<number>(0);
  const [boardId, setBoardId] = useState("");
  const [isModal, setIsModal] = useState(false);
  const modalToggle = () => {
    setIsModal((prev: boolean) => !prev);
  };
  const modalCurrentTarget = (event: CustomMouseEvent) => {
    if (isModal && event.target === event.currentTarget) {
      modalToggle();
    }
  };

  const onClickUserDetail = (event: CustomMouseEvent) => {
    setBoardId(event.currentTarget.id);
    modalToggle();
  };

  useEffect(() => {
    const getBoardData = async () => {
      try {
        const data = await query(
          collection(db, "user"),
          where("level", "==", 0),
          orderBy("date", "desc")
        );
        const getData = await getDocs(data);
        const result: any = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFetchBoard(result);
      } catch (error) {
        console.log(error);
      }
    };
    void getBoardData();
  }, []);

  useEffect(() => {
    let filteredData = fetchBoard;
    if (userStateType === 1) {
      filteredData = filteredData.filter((item: IFetchMember) => item.state);
    } else if (userStateType === 2) {
      filteredData = filteredData.filter((item: IFetchMember) => !item.state);
    }
    void setFilteredBoard(filteredData);
  }, [fetchBoard, userStateType]);

  return (
    <S.Wrapper>
      <S.Contents>
        <S.Title>
          <span>일반회원</span>
        </S.Title>
        <S.Content>
          <MemberBoard
            boardData={filteredBoard}
            USER_STATE_TYPE={USER_STATE_TYPE}
            setUserStateType={setUserStateType}
            onClickUserDetail={onClickUserDetail}
            boardId={boardId}
            isModal={isModal}
            modalCurrentTarget={modalCurrentTarget}
            modalToggle={modalToggle}
          />
        </S.Content>
      </S.Contents>
    </S.Wrapper>
  );
}
