"use strict";

var THREE = require('three.js');
var util = require('util');

function getGeometry(req, res){
  res.send(new THREE.CylinderGeometry( 100, 100, 100, 32 ));
}


module.exports = function(app) {
  app.get('/geo/:id?', getGeometry);
}

