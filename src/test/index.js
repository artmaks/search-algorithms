import assert from 'assert'

import { linearSearchRecursive, linearSearch } from '../algorithms/linear'
import { arrays } from './data'

const listOfSortFunctions = [linearSearchRecursive, linearSearch]

describe('Testing of all search algorithms', function () {
  listOfSortFunctions.forEach((sortFunction) => {
    describe(`testing ${sortFunction.name}` , function () {

      describe('simple static testing', function () {
        it('should find value 3 at index 2', function () {
          assert.equal(2, sortFunction([1, 2, 3], 3))
        })
      });
    
      describe('static testing from prepared data file', function () {
        arrays.forEach((arr) => {
          arr.answers.forEach((answer) => {
            it(`should find value ${answer.item} at index ${answer.index}`, function () {
              assert.equal(answer.index, sortFunction(arr.array, answer.item))
            });
          })
        })
      })

    });
  })
});