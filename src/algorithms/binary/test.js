import assert from 'assert'

import { binarySearchRecursive, binarySearch } from './index'
import { arrays } from '../../data/arrays'

const listOfSearchFunctions = [binarySearchRecursive, binarySearch]

describe('Testing of all search algorithms', function () {
  listOfSearchFunctions.forEach((searchFunction) => {
    const functionName = searchFunction.name; 
    describe(`testing ${functionName}` , function () {

      describe('large array (10000 items) with element at the end (sorted)', function () {
        const largeArray = new Array(999999).fill(999);
        const item = 1000;
        largeArray[largeArray.length - 1] = item;
        const answer = largeArray.indexOf(item);

        it(`should find value ${item} at index ${answer}`, function () {
          console.time('timer');
          assert.equal(answer, searchFunction(largeArray, item))
          console.timeEnd('timer');
        });
      });

    });
  })
});