const i = { asks: [['11222', '22'], ['22223', '343'], ['22223', '343']] }

const b = i.asks.reduce((acc, cur) => Number(acc) + Number(cur[1]))
console.log(b)
