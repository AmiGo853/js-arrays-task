const _ = require("lodash"); 

// BEGIN
export default function getSameCount(coll1, coll2) {
  const unique1 = _.uniq(coll1);
  const unique2 = _.uniq(coll2);
  let count = 0;

  for (const item1 of unique1) {
    for (const item2 of unique2) {
      if (item1 === item2) {
        count += 1;
      }
    }
  }

  return count;
}
// END