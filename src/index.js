import React, { useEffect, useState } from "react";
import { default as styles } from './index.css';

function Pagenation(props) {
    const { currentPage, pageSize, pageSizeOptions, total, handleChangePage, handleChangePageSize } = props;
    const count = Math.ceil(total / pageSize);
    const [pageArr, setPageArr] = useState([]);
    useEffect(() => {
        pageChange();
    }, [currentPage, pageSize, pageSizeOptions, total])
    const pageChange = () => {
        let newArr = [];
        let c = 1;
        if (count <= 6) {
            while (c <= count) {
                newArr.push(c);
                c++;
            }
        } else if (count === 7) {
            if (currentPage <= 4) {
                newArr = [1, 2, 3, 4, 5, '···', 7];
            } else {
                newArr = [1, '···', 3, 4, 5, 6, 7];
            }
        } else {
            if (currentPage <= 3) {
                newArr = [1, 2, 3, 4, 5, '···', count];
            } else if (currentPage >= count - 2) {
                newArr = [1, '···', count - 4, count - 3, count - 2, count - 1, count];
            } else {
                newArr = [1, '···', currentPage - 1, currentPage, currentPage + 1, '···', count]
            }
        }
        setPageArr(newArr);
    }
    return (
        <div className={styles['react-hook-pagenation']}>
            <button disabled={currentPage === 1} className={styles['prev-page']} onClick={() => handleChangePage(currentPage === 1 ? 1 : currentPage - 1)}>上一页</button>
            {pageArr.map((item, index) => {
                if (item === '···') {
                    return <div className={styles['page-item-omit']} key={`${item}-${index}`}>{item}</div>
                }
                return <div className={`${styles['page-item']} ${styles[item === currentPage ? 'current-page' : '']}`} key={`${item}-${index}`} onClick={e => handleChangePage(Number(e.target.innerText))}>{item}</div>
            })}
            <button disabled={currentPage === count} className={styles['next-page']} onClick={() => handleChangePage(currentPage === count ? count : currentPage + 1)}>下一页</button>
            <select name="pageSize" className={styles['react-hook-pagenation-page-size']} id="react-hook-pagenation-page-size" value={pageSize} onChange={e => handleChangePageSize(Number(e.target.value))}>
                {pageSizeOptions.map((item, index) => (<option key={index} value={item}>{item}条/页</option>))}
            </select>
            <div className={styles['total']}>共{total}条</div>
        </div>
    )
}

export default Pagenation;