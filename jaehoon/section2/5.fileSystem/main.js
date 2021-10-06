const fs = require('fs');
let text
fs.readFile('sample.txt', 'utf8', (err, data) => {
	if(err)
		throw error;
	console.log(data)
	//text = data
})
//console.log(text)