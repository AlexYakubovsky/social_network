import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({totalCount, pageSize, changeCurrentPage, currentPage}) => {
    const pagesCount = Math.ceil(totalCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(v => <span key={v} className={currentPage === v && styles.active}
                                  onClick={() => changeCurrentPage(v)}>{v} </span>)}
        </div>
    )
};

export default Pagination;