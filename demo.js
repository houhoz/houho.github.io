/*
 * @Author: houyazhao
 * @Date: 2021-04-15 16:28:02
 * @LastEditors: houyazhao
 * @LastEditTime: 2021-04-15 16:31:10
 * @Description:
 * @FilePath: /houhoz.github.io/demo.js
 */
const list = [
  { id: 1, a: 1 },
  { id: 2, a: 2 },
  { id: 3, a: 3 },
  { id: 1, a: 4 },
];
const result = list.reduce((acc, cur) => {
  const ids = acc.map(item => item.id);
  return ids.includes(cur.id) ? acc : [...acc, cur]
}, [])
console.log(result);
