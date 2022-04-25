<h1 align="center">Welcome to react-hook-pagenation 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/react-hook-pagenation" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/react-hook-pagenation.svg">
  </a>
  <a href="https://github.com/flymoth/react-hook-pagenation#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/flymoth/react-hook-pagenation/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/flymoth/react-hook-pagenation/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/flymoth/react-hook-pagenation" />
  </a>
</p>

> 使用react-hooks开发的分页组件
> a react pagenation component used reack-hooks.

### 🏠 [Homepage](https://github.com/flymoth/react-hook-pagenation#readme)

## Install

```sh
npm i react-hook-pagenation
```
## Usage
```
import Pagenation from 'react-hook-pagenation';
import 'react-hook-pagenation/lib/main.min.css';

<Pagenation currentPage={currentPage} pageSize={pageSize} pageSizeOptions={pageSizeOptions} total={total} handleChangePage={handleChangePage} handleChangePageSize={handleChangePageSize}></Pagenation>
```

## APIs
|参数(argument)|类型(type)|释义(mean)|是否必选(required)|
|--------|-------|------|------|
|currentPage|number|当前分页|YES|
|pageSize|number|分页大小|NO|
|pageSizeOptions|array[number]|分页选项|NO|
|total|number|总数|YES|
|totalText|string|自定义总数文案|NO|
|handleChangePage|function|切换分页|YES|
|handleChangePageSize|function|切换分页大小|NO|

## Demo
参考`example/src`目录。
see `example/src`.
![demo1](https://github.com/flymoth/react-hook-pagenation/blob/main/static/demo1.png?raw=true)
![demo2](https://github.com/flymoth/react-hook-pagenation/blob/main/static/demo2.png?raw=true)
![demo3](https://github.com/flymoth/react-hook-pagenation/blob/main/static/demo3.png?raw=true)

## Author

👤 **flymoth**

* Website: flymoth.github.io
* Github: [@flymoth](https://github.com/flymoth)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/flymoth/react-hook-pagenation/issues). You can also take a look at the [contributing guide](https://github.com/flymoth/react-hook-pagenation/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [flymoth](https://github.com/flymoth).<br />
This project is [MIT](https://github.com/flymoth/react-hook-pagenation/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_