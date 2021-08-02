/**
 * 开发环境打包方式webpack src/js/index.js -o build/js/built.js --mode=development
 */


import './index.less';

function sum(x, y) {
    return x + y;
}
console.log(sum(5, 6));