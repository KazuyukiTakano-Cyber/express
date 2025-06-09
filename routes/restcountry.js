var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', async (req, res) => {
request('https://restcountries.com/v3.1/independent?status=true&fields=languages,capital', function (error, response, body) {
if (!error && response.statusCode == 200) {
const data = JSON.parse(body);
res.json(data);
}
});
})

module.exports = router;