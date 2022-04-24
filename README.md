# react-hook-pagenation
使用react-hooks开发的分页组件

# 使用方法

## 安装

```
npm i react-hook-pagenation
```
## 使用
```
import Pagenation from 'react-hook-pagenation';
import 'react-hook-pagenation/lib/main.min.css';

<Pagenation currentPage={currentPage} pageSize={pageSize} pageSizeOptions={pageSizeOptions} total={total} handleChangePage={handleChangePage} handleChangePageSize={handleChangePageSize}></Pagenation>
```
## API
|参数|类型|释义|
|--------|-------|------|
|currentPage|number|当前分页|
|pageSize|number|分页大小|
|pageSizeOptions|array[number]|分页选项|
|total|number|总数|
|handleChangePage|function|切换分页|
|handleChangePageSize|function|切换分页大小|

## 完整Demo
参考源代码`example/src`目录