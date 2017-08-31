import assert from 'assert'

import { linearSearchRecursive } from '../algorithms/linear'
import { arrays } from './data'

describe('Testing of search algorithms ', function () {
  describe('simple static testing', function () {

    it('should find value 3 at index 2', function () {
      assert.equal(2, linearSearchRecursive([1, 2, 3], 3))
    })

  });

  describe('static testing from prepared data file', function () {

    arrays.forEach((arr) => {
      arr.answers.forEach((answer) => {
        it(`should find value ${answer.item} at index ${answer.index}`, function () {
          assert.equal(answer.index, linearSearchRecursive(arr.array, answer.item))
        });
      })
    })

  })
});