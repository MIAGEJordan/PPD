r = require('../main.js')

r = r.create()

r.running


 r.eval('library (\'blockcluster\') ', function(a) { console.log(a); })
 r.eval('data ( \'binarydata \' ) ', function(b) { console.log(b); })

 r.eval("out<-cocluster(binarydata, datatype = 'binary', nbcocluster = c(2,3))", function(d) { console.log(d); })
  r.eval('cocluster(binarydata, datatype = \'binary\', nbcocluster = c(2,3))', function(d) { console.log(d); })
 r.eval('summary ( out )', function(d) { console.log(d); })
 r.eval('plot(out)', function(d) { console.log(d); })