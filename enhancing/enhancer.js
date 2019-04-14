module.exports = {
  succeed,
  fail,
  repair,
  // get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    return item.enhancement =+ 1
  } else {
    return item.enhancement;
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    return item.durability =- 5
} if (item.enhancement > 16) {
  return item.durability =-10 && item.enhancement--
} if (item.enhancement === 15 || item.enhancement === 16) {
    return item.durability =- 10
  } 
}

function repair(item) {
  if (item.durability < 100) {
    return item.durability === 100
  } else {
        return { ...item };
  }
}

// function get(item) {
//   if (item.enhancement === 0) {
//     return item
//   } 
// }
