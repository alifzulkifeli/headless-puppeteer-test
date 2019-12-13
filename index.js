var request = require('request');
var cheerio = require('cheerio');
var fetch = require('node-fetch')

request('https://www.mercari.com/jp/search/?keyword=laptop', function (error, response, html) {
	  if (!error && response.statusCode == 200) {
		      console.log(html);
		  console.log(response);
		    }
});


