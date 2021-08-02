const { count } = require('./test');

function sum(...args) {
    return args.reduce((p, c) => p + c, 0);
}

/*
  通过js代码，让某个文件被单独打包成一个chunk
  import动态导入语法：能将某个文件单独打包
*/

//可以通过注释来给打包的包名命名：/* webpackChunkName: 'test' */ 命名为test
import ( /* webpackChunkName: 'test' */ './test')
.then(({ mul, count }) => {
        // 文件加载成功~
        // eslint-disable-next-line
        console.log(mul(2, 5));
    })
    .catch(() => {
        // eslint-disable-next-line
        console.log('文件加载失败~');
    });

// eslint-disable-next-line
console.log(sum(1, 2, 3, 4));
console.log(count(5, 4));