
// JSON to HTML parser

var pdf = require('html-pdf');
var fs = require('fs');


var json = fs.readFileSync('data.json', 'utf8');
var obj = JSON.parse(json);

var htmlStart = '<html><body>';
var htmlEnd = '</body></html>';

var htmlContent = '';

for(var i in obj){
	htmlContent += '<hr>'
			+ '<h3>' + obj[i].name + '</h3>'
			+ '<ul><li>日期: ' + obj[i].date + '</li>'
			+ '<li>均溫: ' + obj[i].avg + '</li>'
			+ '<li>最高溫: ' + obj[i].max + '</li>'
			+ '<li>最低溫: ' + obj[i].min + '</li></ul>'
	
}

var html = htmlStart + htmlContent + htmlEnd;

var pdfOptions = {format: 'Letter'};

pdf.create(html, pdfOptions).toFile('./weather.pdf', function(err, result){
	if(err){
		console.log('error in pdf.create(), err=', err);
	}
	console.log('result=', result);
	
});
