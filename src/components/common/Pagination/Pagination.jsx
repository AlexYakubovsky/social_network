import React, {useState} from "react";
import styles from "./Pagination.module.css";

const Pagination = ({totalCount, usersOnPage, changeCurrentPage, currentPage, portionSize}) => {
    const pagesCount = Math.ceil(totalCount / usersOnPage)
    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={styles.pagination}>
            <div className={styles.pagination__choice_page}>
                {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>}

                {pages.filter(v => v >= leftPortionPageNumber && v <= rightPortionPageNumber)
                    .map(v => <span key={v} className={currentPage === v ? styles.active : ''}
                                    onClick={() => changeCurrentPage(v)}>{v} </span>)}

                {portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
            </div>

            <div className={styles.pagination__portion_number}>
                <p><span>{portionNumber}</span> / <span>{portionCount}</span></p>
            </div>
        </div>
    )
}

export default Pagination