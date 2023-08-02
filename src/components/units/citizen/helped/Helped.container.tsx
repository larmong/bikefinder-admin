import * as S from "../../inquiry/faq/Faq.style";
import { db } from "../../../../commons/libraries/firebase/firebase.config";
import { CustomMouseEvent } from "../../../../commons/types/global.types";
import { IFetchHelped } from "./board/Board.types";
import { useEffect, useState } from "react";
import { Content, Contents, Title } from "../../dashboard/Dashboard.style";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import HelpedBoard from "./board/Board.container";

export default function Helped() {
  const [fetchData, setFetchData] = useState<IFetchHelped[]>([]);

  const onClickHelpedDetail = (event: CustomMouseEvent) => {
    console.log(event.currentTarget.id);
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
            fetchData={fetchData}
            onClickHelpedDetail={onClickHelpedDetail}
          />
        </Content>
      </Contents>
    </S.Wrapper>
  );
}
