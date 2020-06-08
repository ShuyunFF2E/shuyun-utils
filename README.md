# shuyun-utils

数云平台版工具集

[![Build Status](https://api.travis-ci.com/shuyunFF2E/shuyun-utils.svg?branch=master)](https://travis-ci.com/shuyunFF2E/shuyun-utils)
[![npm version](https://img.shields.io/npm/v/shuyun-utils.svg?style=flat-square)](https://www.npmjs.com/package/shuyun-utils)
[![npm downloads](https://img.shields.io/npm/dt/shuyun-utils.svg?style=flat-square)](https://www.npmjs.com/package/shuyun-utils)
[![codecov](https://codecov.io/gh/ShuyunFF2E/shuyun-utils/branch/master/graph/badge.svg?token=DKK8BPZ40W)](https://codecov.io/gh/ShuyunFF2E/shuyun-utils)

## 安装

```javascript
npm i shuyun-utils --save
```

## 方法介绍

### Date `日期相关`

#### ShuyunUtils.moment() `日期函数`

> ShuyunUtils.moment 并不对时区进行处理，如果有需要使用时区的请直接使用[moment](https://www.npmjs.com/package/moment)库。

```javascript
// number格式的年月日
ShuyunUtils.moment(19880102);

// string格式的年月日
ShuyunUtils.moment('19880102');

// 使用`/`相隔的字符串
ShuyunUtils.moment('1988/01/02 12:12:22');

// 使作`-`相隔的字符串
ShuyunUtils.moment('1988-01-02 12:12:22');

// 时间戳
ShuyunUtils.moment(1547285063173);

// format
ShuyunUtils.moment(1547285063173).format('YYYY-MM-DD'); // 2019-01-12
ShuyunUtils.moment(1547285063173).format('YYYY年MM月DD日'); // 2019年01月12日
ShuyunUtils.moment(1547285063173).format('YYYY-MM-DD HH:mm:ss'); // 2019-01-12 17:24:23

// 获取年月日
ShuyunUtils.moment(1547285063173).fullYear; // 2019
ShuyunUtils.moment(1547285063173).year; // 19
ShuyunUtils.moment(1547285063173).month; // 1
ShuyunUtils.moment(1547285063173).date; // 12

// 获取时分秒
ShuyunUtils.moment(1547285063173).hour; // 17
ShuyunUtils.moment(1547285063173).minute; // 24
ShuyunUtils.moment(1547285063173).second; // 23

// 获取周
ShuyunUtils.moment(1547285063173).day; // 6
```

### Object `对象与JSON相关`

#### ShuyunUtils.equal(object1, object2) `验证两个Object是否相同`

```javascript
// 验证对象
let o1 = { name: 'baukh', age: 31 };
let o2 = { name: 'baukh', age: 31 };
let o3 = { name: 'kouzi', age: 28 };
ShuyunUtils.equal(o1, o2); // true
ShuyunUtils.equal(o1, o3); // false

// 验证字符串
ShuyunUtils.equal('baukh', 'baukh'); // true

// 验证数组
let a1 = [1, 2, 3];
let a2 = [1, 2, 3];
let a3 = [3, 2, 1];
ShuyunUtils.equal(a1, a2); // true
ShuyunUtils.equal(a1, a3); // false
```

#### ShuyunUtils.index(array, object) `获取Array中Object的索引`

```javascript
let o1 = { name: 'cc', age: 31 };
let o2 = { name: 'kouzi', age: 31 };
let o3 = { name: 'baukh', age: 31 };
let arr = [
	{ name: 'baukh', age: 31 },
	{ name: 'cc', age: 31 },
];
ShuyunUtils.index(arr, o1); // 1
ShuyunUtils.index(arr, o2); // -1
ShuyunUtils.index(arr, o3); // 0
```

#### ShuyunUtils.clone(obj) `clone 对象`

> 对 JSON.stringify 存在丢失的类型(如 function)不作处理。

let o1 = {name: 'cc', age: 31};
let o2 = ShuyunUtils.clone(o1);
o1.name; // cc
o1 === o2; // false

#### ShuyunUtils.isEmpty(obj) `检测是否为空对象`

```javascrpt
let o1 = {name: 'cc', age: 31};
let o2 = {};
ShuyunUtils.isEmpty(o1); // false
ShuyunUtils.isEmpty(o2); // true
```

#### ShuyunUtils.type(value) `获取传参的类型`

```javascript
ShuyunUtils.type(undefined); //undefined
ShuyunUtils.type(null); // null
ShuyunUtils.type(true); // boolean
ShuyunUtils.type(Boolean()); // boolean
ShuyunUtils.type(123); // number
ShuyunUtils.type(Number(123)); // number
ShuyunUtils.type('123'); // string
ShuyunUtils.type(String('123')); // string
ShuyunUtils.type(() => {}); // function
ShuyunUtils.type([]); // array
ShuyunUtils.type(new Array(1)); // array
ShuyunUtils.type(new Date()); // date
ShuyunUtils.type(Error()); // error
ShuyunUtils.type(/test/); // regexp
ShuyunUtils.type(document.body); // element
ShuyunUtils.type(nodeList); // nodeList
ShuyunUtils.type(divEle); // element
```

#### ShuyunUtils.trim(json) `清除JSON中为[null, undefined]的字段`

```javascript
// 传参为对象
let o = { name: 'kouzi', age: 28, like: null, title: undefined, gender: 0 };
ShuyunUtils.trim(o); // {name: 'kouzi', age: 28, gender: 0}

// 传参为字符串
let o = '  baukh  ';
ShuyunUtils.trim(o); // baukh
```

### ShuyunUtils.toQueryString(formData) `Object转换为queryString`

```javascript
// 传参为常规json
ShuyunUtils.toQueryString({ name: 'zhangsan', age: 12 }); // 'name=zhangsan&age=12'

// 传参存在空值的json
ShuyunUtils.toQueryString({ name: 'zhangsan', age: '' }); // 'name=zhangsan&age='

// 传参存在null值和对象的json
ShuyunUtils.toQueryString({ name: 'zhangsan', params: { name: 'zhangsan', age: 12 }, page: { currentPage: 1, pageSize: 10 }, other: null });
// 'name=zhangsan&params={"name":"zhangsan","age":12}&page={"currentPage":1,"pageSize":10}&other=null'
```

### String `字符串相关`

#### ShuyunUtils.toHump(str) `连字符转驼峰`

```javascript
ShuyunUtils.toHump('font-size'); //fontSize
```

#### ShuyunUtils.toHyphen(str); `驼峰转连字符`

```javascript
ShuyunUtils.toHyphen('FontSize'); // -font-size
```

### ShuyunUtils.toFormData(str) `queryString的形式解析成对象`

```javascript
// 常规值
ShuyunUtils.toFormData('name=zhangsan&age=22&gender=male'); //{name:'zhangsan', age: '22', gender:'male'}

// 首字符为?号型式
ShuyunUtils.toFormData('?name=zhangsan&age=22&gender=male'); //{name:'zhangsan', age: '22', gender:'male'}

// 包含空值
ShuyunUtils.toFormData('name=zhangsan&birth='); //{name:'zhangsan', birth:''}

// 包含类对像值
ShuyunUtils.toFormData('name=zhangsan&other={gender: "male"}'); //{name:'zhangsan', other: "{gender: \"male\"}"}}
```

### Text `文本相关`

#### ShuyunUtils.copyText(str) `将文本放粘贴板`

```javascript
ShuyunUtils.copyText('font-size'); // 粘贴板中的值为font-size
```

#### ShuyunUtils.getTextWidth(text) `获取文本所占宽度`

```javascript
// 需要注意: 获取的宽度与当前document.body上所设置的`font-size`, `font-weight`, `font-family`有关。
document.body.style.fontSize = '12px';
document.body.style.fontFamily = 'Tahoma';
document.body.style.fontWeight = '400';

ShuyunUtils.getTextWidth('aaa'); // 18
ShuyunUtils.getTextWidth('测试宽度'); // 48
```

### Number `数字相关`

#### ShuyunUtils.toPercentile(value, decimal, fixed) `浮点数转换百分位`

```javascript
// @param value: 需要转换的数值
// @param decimal: 保留小数点位数
// @param fixed: 是否强制保留decimal指定的位数
// @returns {*}: 返回百分位格式的字符串
ShuyunUtils.toPercentile(0.1230123, 1); // '12.3%'
ShuyunUtils.toPercentile(0.1230123, 2); // '12.30%'
ShuyunUtils.toPercentile(0.1230123, 2, false); // '12.3%'
```

#### ShuyunUtils.toThousands(value, decimal, fixed) `浮点数转换千分位`

```javascript
// @param value: 需要转换的数值
// @param decimal: 保留小数点位数
// @param fixed: 是否强制保留decimal指定的位数
// @returns {*}: 返回千分位格式的字符串
ShuyunUtils.toThousands(value, 1); // '123.0‰'
ShuyunUtils.toThousands(value, 1, false); // '123‰'
ShuyunUtils.toThousands(value, 2); // '123.01‰'
ShuyunUtils.toThousands(value, 2, false); // '123.01‰'
```

### File `文件相关`

#### ShuyunUtils.download(response, fileName);

```javascript
// @param response: 通过后端接口返回二进制流(blob)。response允许两种格式: 1.blob; 2.{data: blob};
// @param fileName: 文件名称
ShuyunUtils.download(response, fileName); // 文件下载
```
