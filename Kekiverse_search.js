const express = require('express')
const app = express()
app.use(express.static('public'))

const port = 3000


app.get('/', (req, res) => {
    res.send('Welcome to Kekiverse Search!')
});

// load the kekData.json file
let jsonData = require('./kekData.json');


// Create the dictionary for search
const kekDict = new Object();
for (data of jsonData) {
    kekDict[data.noun] = data
};

// search function
app.get('/search', (req, res) => {

    // decode URL
    const decoded_q = decodeURIComponent(req.query.q)

    // check if the keyword is in kekDict
    if (decoded_q in kekDict) {
        res.send(kekDict[decoded_q])  // return the value if found
    } else {
        res.sendStatus(404)  // return 404 if not found
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})