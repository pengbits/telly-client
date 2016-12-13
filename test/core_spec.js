import {List, Map} from 'immutable';
import {expect} from 'chai';
import {setShows} from '../src/core';

describe('application logic', () => {
  describe('home', () => {

    it('set initial list of shows', () => {
      const state = Map();
      const shows = List.of('Berlin Station','Dicte','Chewing Gum');
      const nextState = setShows(state, shows);
      expect(nextState).to.equal(Map({
        'shows': List.of('Berlin Station','Dicte','Chewing Gum')
      }));
    });
    
    it('display a show\'s details', () => {
      expect(true) 
    });
    
    it('add a show', () => {
      expect(true) 
    });
    
  });
});