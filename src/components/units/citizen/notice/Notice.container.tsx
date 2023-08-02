import * as S from "../../inquiry/faq/Faq.style";
import { Content, Contents, Title } from "../../dashboard/Dashboard.style";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { CustomMouseEvent } from "../../../../commons/types/global.types";
import { IFetchNotice } from "./board/Board.types";
import NoticeBoard from "./board/Board.container";

export default function Notice() {
  const NOTICE_STATE_TYPE = [
    {
      id: 0,
      name: "전체",
      checkedState: true,
    },
    {
      id: 1,
      name: "상위공지",
      checkedState: false,
    },
    {
      id: 2,
      name: "일반공지",
      checkedState: false,
    },
  ];

  const [fetchData, setFetchData] = useState<IFetchNotice[]>([]);
  const [filteredBoard, setFilteredBoard] = useState<IFetchNotice[]>([]);
  const [noticeStateType, setNoticeStateType] = useState<number>(0);
  const [boardId, setBoardId] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [contactData, setContactData] = useState("");

  const modalToggle = () => {
    setIsModal((prev: boolean) => !prev);
  };

  const modalCurrentTarget = (event: CustomMouseEvent) => {
    if (isModal && event.target === event.currentTarget) {
      modalToggle();
    }
  };

  const onClickNoticeDetail = (event: CustomMouseEvent) => {
    setBoardId(event.currentTarget.id);
    modalToggle();
  };

  useEffect(() => {
    const getBoardData = async () => {
      try {
        const data = await query(
          collection(db, "notice"),
          orderBy("date", "desc")
        );
        const getData = await getDocs(data);
        const result: any = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFetchData(result);
      } catch (error) {
        console.log(error);
      }
    };
    void getBoardData();
  }, []);

  useEffect(() => {
    let filteredData = fetchData;
    if (noticeStateType === 1) {
      filteredData = filteredData.filter((item: IFetchNotice) => item.top);
    } else if (noticeStateType === 2) {
      filteredData = filteredData.filter((item: IFetchNotice) => !item.top);
    }
    setFilteredBoard(filteredData);
  }, [fetchData, noticeStateType]);

  return (
    <S.Wrapper>
      <Contents>
        <Title>
          <span>공지사항</span>
        </Title>
        <Content>
          <NoticeBoard
            fetchData={filteredBoard}
            NOTICE_STATE_TYPE={NOTICE_STATE_TYPE}
            setNoticeStateType={setNoticeStateType}
            onClickNoticeDetail={onClickNoticeDetail}
            boardId={boardId}
            isModal={isModal}
            modalCurrentTarget={modalCurrentTarget}
            modalToggle={modalToggle}
          />
        </Content>
      </Contents>
    </S.Wrapper>
  );
}
