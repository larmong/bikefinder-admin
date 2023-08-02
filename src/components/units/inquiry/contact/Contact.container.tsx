import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { useEffect, useState } from "react";
import { Contents, Title, Content } from "../../dashboard/Dashboard.style";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { CustomMouseEvent } from "../../../../commons/types/global.types";
import ContactBoard from "./board/Board.container";
import { Wrapper } from "./Contact.style";
import { IFetchContact } from "./board/Board.types";

export default function Contact() {
  const FAQ_STATE_TYPE = [
    {
      id: 0,
      name: "전체",
      checkedState: true,
    },
    {
      id: 1,
      name: "답변완료",
      checkedState: false,
    },
    {
      id: 2,
      name: "미답변",
      checkedState: false,
    },
  ];

  const [fetchBoard, setFetchBoard] = useState<IFetchContact[]>([]);
  const [filteredBoard, setFilteredBoard] = useState<IFetchContact[]>([]);
  const [faqStateType, setFaqStateType] = useState<number>(0);
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

  const onClickContactDetail = (event: CustomMouseEvent) => {
    setBoardId(event.currentTarget.id);
    modalToggle();
  };

  const onChangeContent = (value: string) => {
    setContactData(value);
  };

  useEffect(() => {
    const getBoardData = async () => {
      try {
        const data = await query(
          collection(db, "faq"),
          orderBy("date", "desc")
        );
        const getData = await getDocs(data);
        const result: any = getData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFetchBoard(result);
        console.log(fetchBoard);
      } catch (error) {
        console.log(error);
      }
    };
    void getBoardData();
  }, []);

  useEffect(() => {
    let filteredData = fetchBoard;
    if (faqStateType === 1) {
      filteredData = filteredData.filter((item: IFetchContact) => item.state);
    } else if (faqStateType === 2) {
      filteredData = filteredData.filter((item: IFetchContact) => !item.state);
    }
    setFilteredBoard(filteredData);
  }, [fetchBoard, faqStateType]);

  return (
    <Wrapper>
      <Contents>
        <Title>
          <span>일대일문의</span>
        </Title>
        <Content>
          <ContactBoard
            FAQ_STATE_TYPE={FAQ_STATE_TYPE}
            fetchData={filteredBoard}
            setFaqStateType={setFaqStateType}
            onClickFaqDetail={onClickContactDetail}
            boardId={boardId}
            isModal={isModal}
            modalCurrentTarget={modalCurrentTarget}
            modalToggle={modalToggle}
            onChangeContent={onChangeContent}
          />
        </Content>
      </Contents>
    </Wrapper>
  );
}
