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
## Developers 👨‍💻
- **[Wizi#3492](https://github.com/Wizi8914)**
