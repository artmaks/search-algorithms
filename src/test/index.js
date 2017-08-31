import assert from 'assert'

import { linearSearchRecursive, linearSearch } from '../algorithms/linear'
import { arrays } from './data'

const listOfSortFunctions = [linearSearchRecursive, linearSearch]

describe('Testing of all search algorithms', function () {
  listOfSortFunctions.forEach((sortFunction) => {
    const functionName = sortFunction.name; 
    describe(`testing ${functionName}` , function () {

      describe('simple static testing', function () {
        it('should find value 3 at index 2', function () {
          assert.equal(2, sortFunction([1, 2, 3], 3))
        })
      });
    
      describe('static testing from prepared data file', function () {
        arrays.forEach((arr) => {
          arr.answers.forEach((answer) => {
            it(`should find value ${answer.item} at index ${answer.index}`, function () {
              console.time('timer');
              assert.equal(answer.index, sortFunction(arr.array, answer.item))
              console.timeEnd('timer');
            });
          })
        })
      });

      describe('large array (10000 items) with element at the end', function () {
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