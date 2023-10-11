import React, { FC } from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import cls from './PaginateBase.module.scss';

export const PaginateBase:FC<ReactPaginateProps> = (props) => {
  const {
    onPageChange,
    onClick,
    pageCount
  } = props;

  return (
    <ReactPaginate
      className={cls.PaginateBase}
      breakLabel="..."
      nextLabel=">"
      onPageChange={onPageChange}
      onClick={onClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
      breakClassName={cls.PaginateBreak}
      breakLinkClassName={cls.PaginateBreakLink}
      pageClassName={cls.PaginatePage}
      pageLinkClassName={cls.PaginatePageLink}
      activeLinkClassName={cls.PaginatePageLinkActive}
      previousLinkClassName={cls.PaginatePrevLink}
      nextLinkClassName={cls.PaginateNextLink}
      nextClassName={cls.PaginateNext}
      disabledLinkClassName={cls.PaginateDisabled}
    />
  )
}