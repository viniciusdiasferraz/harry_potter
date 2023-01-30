import React from "react";
import styles from "../Pagination/styles.module.css"

const Pagination = ({setCurrentPage, pages, currentPage}) => {
return(
    <div  className={styles.pagination}>
    {pages && Array.from(Array(pages), (item, index) => {
      return <button style={index === currentPage ? {backgroundColor: "gray"} : null} className={styles.button} key={index} value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
    })}
  </div>
)
}

export default Pagination