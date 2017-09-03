import assert from 'assert'

import { binarySearchRecursive, binarySearch } from './index'
import { arrays } from '../../data/arrays'

const listOfSortFunctions = [binarySearchRecursive, binarySearch]

describe('Testing of all search algorithms', function () {
  listOfSortFunctions.forEach((sortFunction) => {
    const functionName = sortFunction.name; 
    describe(`testing ${functionName}` , function () {

      describe('large array (10000 items) with element at the end (sorted)', function () {
        const largeArray = new Array(999999).fill(999);
        const item = 1000;
        largeArray[largeArray.length - 1] = item;
        const answer = largeArray.indexOf(item);

        it(`should find value ${item} at index ${answer}`, function () {
          console.time('timer');
          if(functionName === 'linearSearchRecursive') {
            assert.equal('RangeError', sortFunction(largeArray, item).name)
            console.error('RangeError')
          } else {
            assert.equal(answer, sortFunction(largeArray, item))
          }
          console.timeEnd('timer');
        });
      });

    });
  })
});