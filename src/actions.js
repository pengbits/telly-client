export const SET_SHOWS = 'SET_SHOWS'
export const SET_SEARCH = 'SET_SEARCH'
export const REQUEST_SEARCH = 'REQUEST_SEARCH'
export const RECIEVE_SEARCH = 'RECIEVE_SEARCH'


// load initial shows into list
export function setShows(shows) {
  return {
    type: SET_SHOWS,
    shows
  }
}

// set the search term to use in searches of tvdb
export function setSearchTerm(term){
  return {
    type: SET_SEARCH,
    search
  }
}

// prepare the search request 
export function requestSearch(search) {
  return {
    type: REQUEST_SEARCH,
    search
  }
}

// {
//   "data": [
//     {
//       "aliases": [],
//       "banner": "graphical/314995-g2.jpg",
//       "firstAired": "2016-10-16",
//       "id": 314995,
//       "network": "EPIX",
//       "overview": "Follows Daniel Meyer/Miller, who has just arrived at the CIA foreign station in Berlin, Germany. Meyer has a clandestine mission: to uncover the source of a leak who has supplied information to a now-famous whistleblower named Thomas Shaw. Guided by veteran Hector DeJean, Daniel learns to contend with the rough-and-tumble world of the field agent: agent-running, deception, the dangers and moral compromises.",
//       "seriesName": "Berlin Station",
//       "status": "Continuing"
//     }
//   ]
// }

export function receiveSearch(search, json) {
  return {
    type: RECIEVE_SEARCH,
    search,
    series: json.data // json.data.map(show => show.data)
  }
}