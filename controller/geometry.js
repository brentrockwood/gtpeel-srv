"use strict";

var THREE = require('three.js');
var util = require('util');

function getGeometry(req, res){
    var geometry = new THREE.BoxGeometry( 200, 200, 200);
    return res.send(geometry);
	/*if(req.params.id){
    res.send(new THREE.CylinderGeometry( 5, 5, 20, 32 ));
  }else{
    res.send(new THREE.CubeGeometry( 200, 200, 200));
    //res.send(defaultObject);
	}*/
}

var defaultObject = {"id":3,"uuid":"834DAE14-DB60-4E53-B6BC-1472143DA2A3","name":"","vertices":[{"x":100,"y":100,"z":100},{"x":100,"y":100,"z":-100},{"x":100,"y":-100,"z":100},{"x":100,"y":-100,"z":-100},{"x":-100,"y":100,"z":-100},{"x":-100,"y":100,"z":100},{"x":-100,"y":-100,"z":-100},{"x":-100,"y":-100,"z":100}],"colors":[],"faces":[{"a":0,"b":2,"c":1,"normal":{"x":1,"y":0,"z":0},"vertexNormals":[{"x":1,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":1,"y":0,"z":0}],"color":{},"vertexColors":[],"vertexTangents":[],"materialIndex":0},{"a":2,"b":3,"c":1,"normal":{"x":1,"y":0,"z":0},"vertexNormals":[{"x":1,"y":0,"z":0},{"x":1,"y":0,"z":0},{"x":1,"y":0,"z":0}],"color":{},"vertexColors":[],"vertexTangents":[],"materialIndex":0},{"a":4,"b":6,"c":5,"normal":{"x":-1,"y":0,"z":0},"vertexNormals":[{"x":-1,"y":0,"z":0},{"x":-1,"y":0,"z":0},{"x":-1,"y":0,"z":0}],"color":{},"vertexColors":[],"vertexTangents":[],"materialIndex":1},{"a":6,"b":7,"c":5,"normal":{"x":-1,"y":0,"z":0},"vertexNormals":[{"x":-1,"y":0,"z":0},{"x":-1,"y":0,"z":0},{"x":-1,"y":0,"z":0}],"color":{},"vertexColors":[],"vertexTangents":[],"materialIndex":1},{"a":4,"b":5,"c":1,"normal":{"x":0,"y":1,"z":0},"vertexNormals":[{"x":0,"y":1,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":1,"z":0}],"color":{},"vertexColors":[],"vertexTangents":[],"materialIndex":2},{"a":5,"b":0,"c":1,"normal":{"x":0,"y":1,"z":0},"vertexNormals":[{"x":0,"y":1,"z":0},{"x":0,"y":1,"z":0},{"x":0,"y":1,"z":0}],"color":{},"vertexColors":[],"vertexTangents":[],"materialIndex":2},{"a":7,"b":6,"c":2,"normal":{"x":0,"y":-1,"z":0},"vertexNormals":[{"x":0,"y":-1,"z":0},{"x":0,"y":-1,"z":0},{"x":0,"y":-1,"z":0}],"color":{},"vertexColors":[],"vertexTangents":[],"materialIndex":3},{"a":6,"b":3,"c":2,"normal":{"x":0,"y":-1,"z":0},"vertexNormals":[{"x":0,"y":-1,"z":0},{"x":0,"y":-1,"z":0},{"x":0,"y":-1,"z":0}],"color":{},"vertexColors":[],"vertexTangents":[],"materialIndex":3},{"a":5,"b":7,"c":0,"normal":{"x":0,"y":0,"z":1},"vertexNormals":[{"x":0,"y":0,"z":1},{"x":0,"y":0,"z":1},{"x":0,"y":0,"z":1}],"color":{},"vertexColors":[],"vertexTangents":[],"materialIndex":4},{"a":7,"b":2,"c":0,"normal":{"x":0,"y":0,"z":1},"vertexNormals":[{"x":0,"y":0,"z":1},{"x":0,"y":0,"z":1},{"x":0,"y":0,"z":1}],"color":{},"vertexColors":[],"vertexTangents":[],"materialIndex":4},{"a":1,"b":3,"c":4,"normal":{"x":0,"y":0,"z":-1},"vertexNormals":[{"x":0,"y":0,"z":-1},{"x":0,"y":0,"z":-1},{"x":0,"y":0,"z":-1}],"color":{},"vertexColors":[],"vertexTangents":[],"materialIndex":5},{"a":3,"b":6,"c":4,"normal":{"x":0,"y":0,"z":-1},"vertexNormals":[{"x":0,"y":0,"z":-1},{"x":0,"y":0,"z":-1},{"x":0,"y":0,"z":-1}],"color":{},"vertexColors":[],"vertexTangents":[],"materialIndex":5}],"faceVertexUvs":[[[{"x":0,"y":1},{"x":0,"y":0},{"x":1,"y":1}],[{"x":0,"y":0},{"x":1,"y":0},{"x":1,"y":1}],[{"x":0,"y":1},{"x":0,"y":0},{"x":1,"y":1}],[{"x":0,"y":0},{"x":1,"y":0},{"x":1,"y":1}],[{"x":0,"y":1},{"x":0,"y":0},{"x":1,"y":1}],[{"x":0,"y":0},{"x":1,"y":0},{"x":1,"y":1}],[{"x":0,"y":1},{"x":0,"y":0},{"x":1,"y":1}],[{"x":0,"y":0},{"x":1,"y":0},{"x":1,"y":1}],[{"x":0,"y":1},{"x":0,"y":0},{"x":1,"y":1}],[{"x":0,"y":0},{"x":1,"y":0},{"x":1,"y":1}],[{"x":0,"y":1},{"x":0,"y":0},{"x":1,"y":1}],[{"x":0,"y":0},{"x":1,"y":0},{"x":1,"y":1}]]],"morphTargets":[],"morphColors":[],"morphNormals":[],"skinWeights":[],"skinIndices":[],"lineDistances":[],"boundingBox":null,"boundingSphere":null,"hasTangents":false,"dynamic":true,"verticesNeedUpdate":false,"elementsNeedUpdate":false,"uvsNeedUpdate":false,"normalsNeedUpdate":false,"tangentsNeedUpdate":false,"colorsNeedUpdate":false,"lineDistancesNeedUpdate":false,"buffersNeedUpdate":false,"groupsNeedUpdate":false,"parameters":{"width":200,"height":200,"depth":200},"widthSegments":1,"heightSegments":1,"depthSegments":1};

module.exports = function(app) {
  app.get('/geo/:id?', getGeometry);
}

