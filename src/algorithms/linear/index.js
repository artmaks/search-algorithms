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

export {
  linearSearchRecursive
}