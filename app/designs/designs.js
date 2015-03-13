'use strict';

function render(element, geometry) {
  var scene, camera, renderer, mesh;
  var material;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera( 50, element.innerWidth() / element.innerHeight(), 100, 10000 );
  camera.position.z = 1000;

  material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

  var loader = new THREE.ObjectLoader();

  var geometries = loader.parseGeometries(Array.isArray(geometry) ? geometry : [geometry]);

  for(var key in geometries) {
    var geom = geometries[key];
    mesh = new THREE.Mesh( geom, material );
    scene.add( mesh );
  }

  renderer = new THREE.WebGLRenderer();
  renderer.setSize( element.innerWidth(), element.innerHeight() );

  element.append( renderer.domElement );

  function animate() {
    requestAnimationFrame( animate );

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render( scene, camera );
  }

  animate();
}

angular.module('myApp.designs', ['ngRoute'])

.config(function($routeProvider) {
  $routeProvider.when('/designs', {
    templateUrl: 'designs/designs.html',
    controller: 'designsCtrl'
  });
})

.controller('designsCtrl', function($http) {
})

.directive('render', function($http) {
  return {
    restrict: "A",
    link: function(scope, elem, attrs) {
      $http.get('/geo/')
      .success(function(data) {
        render(elem, data);
      })
      .error(function(err) {
        elem[0].innerText = err;
      })
    }
  }
});

