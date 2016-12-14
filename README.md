README
Telly

just having a bit of fun with react and the tvdb api

tdd approach and react intro from https://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html


API
http://thetvdb.com/wiki/index.php?title=Programmers_API
https://api.thetvdb.com/swagger
user    mydrone
app     helloworldapp	
apikey  2D128652BABFA237
account identifier / userkey 4D7351809F5954BE

to obtain a key, POST the following json to https://api.thetvdb.com/login:
// in postman, chose params: raw: json
{
  "apikey":"2D128652BABFA237",
  "userkey":"4D7351809F5954BE",
  "username":"mydrone"
}
this will respond with a token to use on subsequent requests, in the Authorize header:
{
  "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0ODE4Mjk2MDAsImlkIjoiaGVsbG93b3JsZGFwcCIsIm9yaWdfaWF0IjoxNDgxNzQzMjAwLCJ1c2VyaWQiOjQ2OTgzOSwidXNlcm5hbWUiOiJteWRyb25lIn0.zNEPjXV31Jitg-dv5bDgWf5bcjDVzA8VjYlfrxTzUSwoamiXdvxR7Eo8QX5pOyWff7K7ATouBdXNBTiQL1sYmhFmQBX51WWRJU5mqXmGoGQOUnOPaZ4MvNbR1cUCGyIqqoDISzoHpbTnR5iNgnFJDpNDOMgC4pL3a-kwgKe_FelixAIFS8CL9aZH7057HDgyFqr8XzfzLqHvYbTqYzSOpnBylTCx6ywg8eJGgjdtYheZRYvY3hcfWAWnESc0sInIoh4Wuc1zzRV2w6LkS_OxhgNfXvg51mbblgJYK0ZR61CdlZfiVEKGAe17anARKX64QBL72YlxEFQbD4COc90k0g"
}
// header 
authorize: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0ODE4Mjk2MDAsImlkIjoiaGVsbG93b3JsZGFwcCIsIm9yaWdfaWF0IjoxNDgxNzQzMjAwLCJ1c2VyaWQiOjQ2OTgzOSwidXNlcm5hbWUiOiJteWRyb25lIn0.zNEPjXV31Jitg-dv5bDgWf5bcjDVzA8VjYlfrxTzUSwoamiXdvxR7Eo8QX5pOyWff7K7ATouBdXNBTiQL1sYmhFmQBX51WWRJU5mqXmGoGQOUnOPaZ4MvNbR1cUCGyIqqoDISzoHpbTnR5iNgnFJDpNDOMgC4pL3a-kwgKe_FelixAIFS8CL9aZH7057HDgyFqr8XzfzLqHvYbTqYzSOpnBylTCx6ywg8eJGgjdtYheZRYvY3hcfWAWnESc0sInIoh4Wuc1zzRV2w6LkS_OxhgNfXvg51mbblgJYK0ZR61CdlZfiVEKGAe17anARKX64QBL72YlxEFQbD4COc90k0g