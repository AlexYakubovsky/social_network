import React, {useState} from "react";
import styles from "./Pagination.module.css";

const Pagination = ({totalCount, pageSize, changeCurrentPage, currentPage, portionSize}) => {
    const pagesCount = Math.ceil(totalCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>}

            {pages.filter(v => v >= leftPortionPageNumber && v <= rightPortionPageNumber)
                .map(v => <span key={v} className={currentPage === v && styles.active}
                                onClick={() => changeCurrentPage(v)}>{v} </span>)}
            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
        </div>
    )
};

export default Pagination;