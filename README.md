README
Telly

just having a bit of fun with react/redux. 

- the purpose of this application is to make and manage lists of whatever shows we are watching at the moment
- the data is managed in a companion app, telly-server, which provides the REST API
- core data sits squarely in our own domain, with storage in Mongo, but we may add some TVDB integrations to add extra meta or provide search by name
- let's try to make use of immutablejs and reselect this time around
