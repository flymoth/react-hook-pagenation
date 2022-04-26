import React, { useEffect, useState } from "react";
import './index.scss';

interface PagenationProps {
    currentPage: number;
    pageSize: number;
    pageSizeOptions?: Array<number>;
    total: number;
    totalText?: string;
    handleChangePage: (v: number) => void;
    handleChangePageSize: (v: number) => void;
}

function Pagenation(props: PagenationProps) {
    const {
        currentPage,
        pageSize,
        pageSizeOptions,
        total,
        totalText,
        handleChangePage,
        handleChangePageSize
    } = props;
    const count = Math.ceil(total / pageSize);
    const [pageArr, setPageArr] = useState<(number | string)[]>([]);
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

    const makePageSizeOptions = () => {
        if (pageSizeOptions) {
            return (
                <select name="pageSize" className="page-size" id="react-hook-pagenation-page-size" value={pageSize} onChange={e => handleChangePageSize(Number(e.target.value))}>
                    {pageSizeOptions.map((item, index) => (<option key={index} value={item}>{item}条/页</option>))}
                </select>
            )
        }
        return '';
    }

    return (
        <div className="react-hook-pagenation">
            <button disabled={currentPage === 1} className="prev-page" onClick={() => handleChangePage(currentPage === 1 ? 1 : currentPage - 1)}>上一页</button>
            {pageArr.map((item, index) => {
                if (item === '···') {
                    return <div className="page-item-omit" key={`${item}-${index}`}>{item}</div>
                }
                return <div className={`page-item ${item === currentPage ? 'current-page' : ''}`} key={`${item}-${index}`} onClick={() => handleChangePage(+item)}>{item}</div>
            })}
            <button disabled={currentPage === count} className="next-page" onClick={() => handleChangePage(currentPage === count ? count : currentPage + 1)}>下一页</button>
            {makePageSizeOptions()}
            {totalText && <div className="total">{totalText}</div>}
        </div>
    )
}

export default Pagenation;