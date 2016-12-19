SET_SEARCH
{
  search: {
    term: "Dicte",
    isFetching: false
  }
}

REQUEST_SEARCH
{
  search: {
    term: "Dicte",
    isFetching: true
  }
}

RECEIVE_SEARCH
{
  search: {
    term: "Dicte",
    isFetching: false,
    results: [
      {
        "aliases": [],
        "banner": "graphical/265571-g.jpg",
        "firstAired": "2013-01-07",
        "id": 265571,
        "network": "TV 2",
        "overview": "Dicte is a dedicated reporter and refuses to give up before she has her story. Her stubborness gives her problems immediately with the policeman John Wagner, and they often get into clashes with each other.",
        "seriesName": "Dicte",
        "status": "Continuing"
      }
    ]
}

REQUEST_SHOW_DETAILS
{
  show: {
    id: 301562,
    isFetching: true
  }
}

RECEIVE_SHOW_DETAILS
{
  show: {
    "aliases": [],
    "banner": "graphical/265571-g.jpg",
    "firstAired": "2013-01-07",
    "id": 265571,
    "network": "TV 2",
    "overview": "Dicte is a dedicated reporter and refuses to give up before she has her story. Her stubborness gives her problems immediately with the policeman John Wagner, and they often get into clashes with each other.",
    "seriesName": "Dicte",
    "status": "Continuing"
  }
}

SET_SHOWS
{
  shows: ["Dicte","Berlin Station","Chewing Gum"],
}

SELECT_SHOW
{
  show: "Dicte"
}