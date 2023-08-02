import * as S from "./Faq.style";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import InquiryFaqBoard from "./board/Board.container";
import { useEffect, useState } from "react";
import { Contents, Title, Content } from "../../dashboard/Dashboard.style";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { ITabMenu } from "./Faq.types";
import { IFetchFaq } from "./board/Board.types";
import { CustomMouseEvent } from "../../../../commons/types/global.types";
import { HiDocumentSearch } from "react-icons/hi";

export default function Faq() {
  const TAB_MENUS: ITabMenu[] = [
    {
      num: "0",
      name: "대여 및 반납",
    },
    {
      num: "1",
      name: "자전거 추가 배치",
    },
    {
      num: "2",
      name: "대여소(개설/폐쇄)",
    },
    {
      num: "3",
      name: "결제/환불/마일리지",
    },
    {
      num: "4",
      name: "자전거 및 시설 관리",
    },
    {
      num: "5",
      name: "앱 또는 홈페이지 문의",
    },
  ];

  const modalTitle = {
    icon: <HiDocumentSearch />,
    title: "자주묻는질문",
  };

  const [tabNum, setTabNum] = useState<number>(0);
  const [fetchData, setFetchData] = useState<IFetchFaq[]>([]);
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

  const onClickFaqDetail = (event: CustomMouseEvent) => {
    setBoardId(event.currentTarget.id);
    modalToggle();
  };

  const getFaqData = async (index: number) => {
    try {
      const data = await query(
        collection(db, "inquiry"),
        where("type", "==", String(index)),
        orderBy("date", "desc")
      );
      const getData = await getDocs(data);
      const result: any = getData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setFetchData(result);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickMoveToTabMenus = (index: number) => {
    setTabNum(index);
    void getFaqData(index);
  };

  useEffect(() => {
    void getFaqData(tabNum);
  }, []);

  return (
    <S.Wrapper>
      <Contents>
        <Title>
          <span>자주묻는질문</span>
        </Title>
        <Content>
          <S.Tab>
            {TAB_MENUS.map((el: ITabMenu, index: number) => (
              <S.Manus
                key={index}
                className={index === Number(tabNum) ? "target" : ""}
                onClick={() => onClickMoveToTabMenus(index)}
              >
                {el.name}
              </S.Manus>
            ))}
          </S.Tab>
          <InquiryFaqBoard
            modalTitle={modalTitle}
            fetchData={fetchData}
            onClickFaqDetail={onClickFaqDetail}
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
