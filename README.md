# Kekiverse Search
This project provides the search service to the website - “Kekiverse”.

# Current server address
http://ec2-175-41-225-219.ap-northeast-1.compute.amazonaws.com:3000/

## How to REQUEST data
This project exposes one endpoint to accept the search request:

|Method|URL|Description|      
|-----|------------------|------------------|      
|GET|/search/?q=<query>|This endpoint accepts the query (a noun); If the noun can be found in kekData.json, it returns the result in the response body with 200 status code; otherwise, returns 404 status code.|

- Example URL: /search?q=Martyred%20Memer


## How to RECEIVE data
The http protocol is adopted in this microservice, so the data will be responded and sent back immediately after the request is received and processed. The data will be stored in the http response body.

## UML sequence diagram
![alt text](/SequenceDiagram.jpg)


## License

**Free tool for use, Yeah!**
