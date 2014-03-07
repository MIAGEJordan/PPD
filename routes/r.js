
/*
 * GET home page.
 */

var rclient = require('../node_modules/rserve-js/main.js');
var rclient = rclient.create();

exports.form = function(req, res){
  res.render('commandInput');
};

exports.sendcommand = function(req, res){
  console.log(req.query.command);
  console.log(rclient.running);
  rclient.eval(req.query.command,function(a){
        console.log(a);
        res.render('result',{ resultat: a });
     });
};
