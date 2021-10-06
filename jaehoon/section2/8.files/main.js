let testFolder = '8.files/datas';
var fs = require('fs');

fs.readdir(testFolder, function(err, fileList) {
	console.log(fileList)
})