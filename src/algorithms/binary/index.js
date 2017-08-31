function binarySearchRecursive(array, item) { 
  return binarySearchRecursiveWithRange(array, 0, array.length, item);
}

function binarySearchRecursiveWithRange(array, min, max, item) {
  const mid = min + Math.floor((max - min) / 2);
  if(max < min)
    return -1;

  
  if(array[mid] > item) {
    return binarySearchRecursiveWithRange(array, min, mid - 1, item);
  } else if(array[mid] < item) {
    return binarySearchRecursiveWithRange(array, mid + 1, max, item);
  } else if(array[mid] === item) {
    return mid;
  } else {
    return -1;
  }
}

function binarySearch(array, item) {
  return binarySearchWithRange(array, 0, array.length, item);
}

function binarySearchWithRange(array, min, max, item) {
  while(max >= min) {
    const mid = min + Math.floor((max - min) / 2);
    if(array[mid > item]) {
      max = mid - 1;
    } else if(array[mid] < item) {
      min = mid + 1;
    } else if(array[mid] === item) {
      return mid;
    }
  }
  return -1;
}

export {
  binarySearchRecursive,
  binarySearch
}
