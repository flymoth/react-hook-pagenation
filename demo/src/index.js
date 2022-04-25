/*** examples/src/app.js ***/
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client'; 
import Pagenation from '../../src/index'; // 引入组件
// import Pagenation from 'react-hook-pagenation' // 引入组件
// import 'react-hook-pagenation/lib/main.min.css' // 引入组件

const App = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [list, setList] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(123);
    const [pageSizeOptions, setPageSizeOptions] = useState([5, 10, 20, 30]);

    const handleChangePage = (val) => {
        setCurrentPage(val)
    };

    const handleChangePageSize = (val) => {
        setPageSize(val)
        setCurrentPage(1)
    };
    return (
        <div>
            <Pagenation currentPage={currentPage} pageSize={pageSize} pageSizeOptions={pageSizeOptions} total={total} totalText={`共${total}条`} handleChangePage={handleChangePage} handleChangePageSize={handleChangePageSize}></Pagenation>
        </div>
    );
}
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);