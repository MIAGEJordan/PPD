
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Interface Web pour l\'execution a distance d\'un logiciel de co-clustering' });
};