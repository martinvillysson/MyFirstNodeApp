
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.blog = function(req, res){
    res.render('blog', { title: 'Blog' });
};