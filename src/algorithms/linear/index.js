function linearSearchRecursive(array, item) {
  return linearSearchRecursiveWithRange(array, 0, array.length, item)
}

function linearSearchRecursiveWithRange(array, low, high, item) {
  if (high < low)
    return -1;

  if (array[low] === item)
    return low;

  return linearSearchRecursiveWithRange(array, low + 1, high, item);
}

function linearSearch(array, item) {
  const min = 0;
  const max = array.length;
  return linearSearchWithRange(array, min, max, item);
}

function linearSearchWithRange(array, min, max, item) {
  while(max > min) {
    if(array[min] === item)
      return min;
    min++;
  }
  return -1;
}

export {
  linearSearchRecursive,
  linearSearch
}