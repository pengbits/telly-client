import {List, Map} from 'immutable';
import {expect} from 'chai';
import {setSearch,setShows} from '../src/core';

describe('application logic', () => {
  describe('home', () => {

    // it('set initial list of shows', () => {
    //   const state = Map();
    //   const shows = List.of('Berlin Station','Dicte','Chewing Gum');
    //   const nextState = setShows(state, shows);
    //   expect(nextState).to.equal(Map({
    //     'shows': List.of('Berlin Station','Dicte','Chewing Gum')
    //   }));
    // });
    // 
    // it('add a show', () => {
    //   expect(true) 
    // });
    
  });
  
  describe('set search', () => {
    it('set the search term/seriesname', () => {
      const state = Map()
      const nextState = setSearch(state, {
        'search':'Dicte'
      })
      
    })
  });
});