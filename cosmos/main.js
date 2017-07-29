'use strict';

var scene;
var camera;
var renderer;
var width = 1400;
var height = 1000;
var fov = 80;
var aspect = width / height;
var near = 1;
var far = 1000;
var controls;

var particles;
var loader;

// scene ステージ
scene = new THREE.Scene();

// camera
camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
camera.position.set(100, 100, 100);
camera.lookAt(scene.position);

// renderer
renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
renderer.setClearColor(0x000000);
// renderer.setPixelRatio(window.devicePixelRatio);

// particles
// mesh: Points
// geometry: 図形の頂点
// material: PointsMaterial
loader = new THREE.TextureLoader();
loader.load('images/1BhjUQ56_400x400.jpg',
// loader.load('images/particle.png',
  function(texture) {  // resourceが読み込まれた時に動かす
    createParticles(texture); //particle 作る
    render();
  }
);


function createParticles(texture) {
  var pGeometry;
  var pMaterial;
  var count = 10000;
  var i;

  // pGeometry
  pGeometry = new THREE.Geometry();
  for (i = 0; i < count; i++) {
    //Geometryに座標（geometry.vertices）を追加
        console.log(Math.random() * 100 -100 )
    //
    pGeometry.vertices.push(
      new THREE.Vector3(

        Math.random() * 300 - 100, // -100~100の乱数
        Math.random() * 300 - 100,
        Math.random() * 300 - 100

        // Math.random() * 100 - 100,
        // Math.random() * 100 - 100,
        // Math.random() * 100 - 100
      )
    );
  }

  // pMaterial
  pMaterial = new THREE.PointsMaterial({
    map: texture,
    size: 1, // サイズ
    blending: THREE.AdditiveBlending, // ブレンドモード(加算)
    transparent: true, // 透過true
    // depthTest: false // 物体が重なった時に後ろにあるものを描画するかしないか
  });

  particles = new THREE.Points(pGeometry, pMaterial);
  scene.add(particles);
}

function render() {
  requestAnimationFrame(render);
  //どこを軸にしてまわるか
  particles.rotation.x += 0.001;  
  // particles.rotation.x += 0.03;  
  particles.rotation.y += 0.001;
  // particles.rotation.y += 0.03;
  particles.rotation.z += 0.001;
  // particles.rotation.z += 0.03;
  renderer.render(scene, camera);
}



window.onload = function(){
  document.getElementById('stage').appendChild(renderer.domElement);
}
