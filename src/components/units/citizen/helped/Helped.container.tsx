import * as S from "../../inquiry/faq/Faq.style";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { CustomMouseEvent } from "../../../../commons/types/global.types";
import { IFetchHelped } from "./board/Board.types";
import { useEffect, useState } from "react";
import { Content, Contents, Title } from "../../dashboard/Dashboard.style";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import HelpedBoard from "./board/Board.container";
import { HiDocumentText } from "react-icons/hi";

export default function Helped() {
  const [fetchData, setFetchData] = useState<IFetchHelped[]>([]);
  const [boardId, setBoardId] = useState("");
  const [isModal, setIsModal] = useState(false);

  const modalTitle = {
    icon: <HiDocumentText />,
    title: "협력업체",
  };

  const modalToggle = () => {
    setIsModal((prev: boolean) => !prev);
  };

  const modalCurrentTarget = (event: CustomMouseEvent) => {
    if (isModal && event.target === event.currentTarget) {
      modalToggle();
    }
  };

  const onClickHelpedDetail = (event: CustomMouseEvent) => {
    setBoardId(event.currentTarget.id);
    modalToggle();
  };

  useEffect(() => {
    const getBoardData = async () => {
      try {
        const data = await query(
          collection(db, "helped"),
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

  return (
    <S.Wrapper>
      <Contents>
        <Title>
          <span>협력업체</span>
        </Title>
        <Content>
          <HelpedBoard
            modalTitle={modalTitle}
            fetchData={fetchData}
            onClickHelpedDetail={onClickHelpedDetail}
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
