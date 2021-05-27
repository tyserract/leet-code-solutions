var firstUniqChar = function (s) {
  const array = s.split("");

  for (let index = 0; index < array.length; index++) {
    if (array.indexOf(array[index]) === array.lastIndexOf(array[index])) {
      return array.indexOf(array[index]);
    }
  }

  return -1;
};
