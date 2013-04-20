
/*
 * GET home page.
 */
var rs = require('robotskirt');
var parser = rs.Markdown.std();

var data = { "posts" : 
 [
     {"text":"i _am_ using *markdown*. Cool link [Bool.se](http://www.bool.se)"},
     {"text":"2i am using __markdown__."}
     ]
};

var findAll = function(callback) {
    var posts = [];
    data.posts.forEach(function (post, i) {
        posts.push({
          text: parser.render(post.text)
        });
      });
  callback( null, posts );
};


exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.blog = function(req, res){
    findAll(function (error, posts){
        res.render('blog', { title: 'Blog', articles: posts});
    });  
};