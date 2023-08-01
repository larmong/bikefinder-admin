import Pagination01UI from "./Pagination01.presenter";
import { useState } from "react";
import { IPropsPagination01 } from "./Pagination01.types";
import { CustomMouseEvent } from "../../../../commons/types/global.types";

export default function Pagination01(props: IPropsPagination01) {
  const [startPage, setStartPage] = useState<number>(1);
  const [nowPage, setNowPage] = useState<number>(1);
  const totalPages: number = Math.ceil(props.noticeLength / props.pageSize);

  const onClickPagination = (event: CustomMouseEvent) => {
    const selectedPage: number = Number(event.currentTarget.id);
    props.handlePageChange(selectedPage);
    setNowPage(selectedPage);
  };

  const onClickPrevPage = () => {
    if (nowPage > 1) {
      props.handlePageChange(nowPage - 1);
      setNowPage(nowPage - 1);
    }
  };
  const onClickNextPage = () => {
    if (nowPage < totalPages) {
      props.handlePageChange(nowPage + 1);
      setNowPage(nowPage + 1);
    }
  };

  return (
    <Pagination01UI
      nowPage={nowPage}
      startPage={startPage}
      totalPages={totalPages}
      onClickPagination={onClickPagination}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
    />
  );
}
