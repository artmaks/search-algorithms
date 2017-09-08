import assert from 'assert'

import { linearSearchRecursive, linearSearch } from './index'
import { arrays } from '../../data/arrays'

const listOfSearchFunctions = [linearSearchRecursive, linearSearch]

describe('Testing of all search algorithms', function () {
  listOfSearchFunctions.forEach((searchFunction) => {
    const functionName = searchFunction.name; 
    describe(`testing ${functionName}` , function () {

      describe('simple static testing (no sorted)', function () {
        it('should find value 3 at index 2', function () {
          assert.equal(2, searchFunction([1, 2, 3], 3))
        })
      });
    
      describe('static testing from prepared data file (no sorted)', function () {
        arrays.forEach((arr) => {
          arr.answers.forEach((answer) => {
            it(`should find value ${answer.item} at index ${answer.index}`, function () {
              console.time('timer');
              assert.equal(answer.index, searchFunction(arr.array, answer.item))
              console.timeEnd('timer');
            });
          })
        })
      });

      describe('large array (10000 items) with element at the end (sorted)', function () {
        const largeArray = new Array(999999).fill(999);
        const item = 1000;
        largeArray[largeArray.length - 1] = item;
        const answer = largeArray.indexOf(item);

        it(`should find value ${item} at index ${answer}`, function () {
          console.time('timer');
          if(functionName === 'linearSearchRecursive') {
            assert.equal('RangeError', searchFunction(largeArray, item).name)
            console.error('RangeError')
          } else {
            assert.equal(answer, searchFunction(largeArray, item))
          }
          console.timeEnd('timer');
        });

      });

    });
  })
});