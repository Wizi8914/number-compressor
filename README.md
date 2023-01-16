<h1 align="center">Number-Compressor ✨</h1>
<p align="center">
  <a href="https://nodei.co/npm/number-compressor/"><img src="https://nodei.co/npm/number-compressor.png?downloads=true&downloadRank=true&stars=true"></a>
</p>

## What is Number-Compressor ?
- An npm package used to compress and decompress numbers for better rendering

## Install the package 📥
```sh
npm install number-compressor
```

## Usage 📚
#### Compress function:
```js
const { compress } = require("number-compressor");

compress(100);
// => return 100

compress(1000);
// => return 1K

compress(1000000);
// => return 1M

compress(1000000000);
// => return 1B

compress(1000000000000);
// => return 1T

compress('test');
// => return Error message
```
#### You can set the number of decimal

```js
compress(274287, 3)
// => return 274.287K

compress(274287, 0)
// => return 274K
```
#### Uncompress function:
```js
const { uncompress } = require("number-compressor");

uncompress(10000);
// => return 10000

uncompress("1K");
// => return 1000

uncompress("1M");
// => return 1000000

uncompress("1B");
// => return 1000000000

uncompress("1T");
// => return 1000000000000

uncompress("1TT");
// => return Error message

uncompress("T");
// => return Error message
```
#### Define your own units
```js

const { compress, uncompress, setCustomUnit } = require("number-compressor");

//You can define units of up to two characters
const myUnits = ["P", "MP", "KO", "D"]

setCustomUnit(myUnits)

compress(1000)
// => return 1P

compress(1000000)
// => return 1MP

compress(2243192, 3)
// => return 2.243MP

uncompress("1D")
// => return 1000000000000

uncompress("1D")
// => return 1000000000000000


```


## Developers 👨‍💻
- **[WIZI](https://github.com/Wizi8914)**
