var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article_one={
    title: "article-one",
    heading: "ARTICLE-ONE",
    content:
   ` <div align="center">
<h1>hello</h1>
</div>`
};
var article_two={
    title: "article-two",
    heading: "ARTICLE-TWO",
    content:
   ` <div align="center">
<h1>hello</h1>
</div>`
};
var article_three={
    title: "article-three",
    heading: "ARTICLE-THREE",
    content:
   ` <div align="center">
<h1>hello</h1>
</div>`
};
function createTemplate(data){
var title=data.title;
var heading=data.heading;
var content=data.content;
var html_template=`<!DOCTYPE html>
<html>
<head>
        <link href="/ui/style.css" rel="stylesheet" />
        <title>${title}</title>
<meta name="viewport" content="width=device-width, initial-scale=1"/> 
</head>
<body>
    <div>
        <a href="/">HOME</a>
    </div><hr/>
<div align="center">
<h1>${heading}</h1>
</div>
<div>${content}</div>
</body>
</html>`;
return html_template;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
    res.send(createTemplate(article_one));
});

app.get('/article-two',function(req,res){
    res.send(createTemplate(article_two));
});

app.get('/article-three',function(req,res){
    res.send(createTemplate(article_three));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
