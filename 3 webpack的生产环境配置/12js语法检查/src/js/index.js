//实际上vs的差价eslint和该章效果一样
function add(x, y) {
    return x + y;
}

// 下一行eslint所有规则都失效（下一行不进行eslint检查）
// eslint-disable-next-line
console.log(add(2, 5));