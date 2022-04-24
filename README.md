# react-hook-pagenation
使用react-hooks开发的react分页组件。
a react pagenation component used reack-hooks.

# 如何使用(How to use)

## 安装(Install)

```
npm i react-hook-pagenation
```
## 使用(Usage)
```
import Pagenation from 'react-hook-pagenation';
import 'react-hook-pagenation/lib/main.min.css';

<Pagenation currentPage={currentPage} pageSize={pageSize} pageSizeOptions={pageSizeOptions} total={total} handleChangePage={handleChangePage} handleChangePageSize={handleChangePageSize}></Pagenation>
```
## API
|参数(argument)|类型(type)|释义(mean)|是否必选(required)|
|--------|-------|------|------|
|currentPage|number|当前分页|YES|
|pageSize|number|分页大小|NO|
|pageSizeOptions|array[number]|分页选项|NO|
|total|number|总数|YES|
|totalText|string|自定义总数文案|NO|
|handleChangePage|function|切换分页|YES|
|handleChangePageSize|function|切换分页大小|NO|

## 完整Demo（Full demo）
参考`example/src`目录。
see `example/src`.