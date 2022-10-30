# Kekiverse Search
This project provides the search service to the website - “Kekiverse”.

## How to REQUEST data
This project exposes one endpoint to accept the search request:

|Method|URL|Description|      
|-----|-----|-------|      
|GET|/search/?q=<query>|This endpoint accepts the query (a noun); If the noun can be found in kekData.json, it returns the result in the response body with 200 status code; otherwise, returns 404 status code.|

Example:
URL: /search?q=Martyred%20Memer


## How to RECEIVE data
The http protocol is adopted in this microservice, so the date will be responded and sent back immediately after the request is received and processed. The data will be stored in the http response body.

## UML sequence diagram
