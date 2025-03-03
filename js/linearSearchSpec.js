var ls = require("./linearSearch.js");

console.log(ls.linearSearch(3, [1,2,3]) === 2);
console.log(ls.linearSearch(4, [1,2,3]) === undefined);
console.log(ls.linearSearch(13, [1,2,3]) === undefined);
console.log(ls.linearSearch(13, []) === undefined);

console.log(ls.globalLinearSeach("a", ["b", "a", "n", "a", "n", "a", "s"]), [1, 3, 5])
console.log(ls.globalLinearSeach("s", ["b", "a", "n", "a", "n", "a", "s"]), [6])
console.log(ls.globalLinearSeach("n", ["b", "a", "n", "a", "n", "a", "s"]), [2, 4])
