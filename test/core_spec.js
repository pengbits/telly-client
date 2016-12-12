import {List, Map} from 'immutable';
import {expect} from 'chai';
import {add} from '../src/core';

describe('application logic', () => {

  describe('add', () => {

    it('adds a show to the queue', () => {
      const state = {
        queue: List,of('Berlin Station')
      }
      const nextState = add(state, 'Dicte');
      expect(nextState).to.equal({
        queue: List.of('Berlin Station','Dicte')
      })
    });
  });
});