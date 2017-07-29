//シーンを作る
var scene = new THREE.Scene();

//カメラを作る
var width  = 600;
var height = 400;
var fov    = 60; //画角 field of view
var aspect = width / height;
var near   = 1;
var far    = 1000;
var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
//カメラの位置
camera.position.set( 0, 0, 50 );

//rendererを設置
var renderer = new THREE.WebGLRenderer();
renderer.setSize( width, height );

//光源を用意(さまざまな種類あり)
var directionalLight = new THREE.DirectionalLight( 0xffffff, 100 );//平行光源を指定
directionalLight.position.set( 0, 0.7, 0.7 ); //平行光源の角度を指定
scene.add( directionalLight );

//形状(ジオメトリー)を作成
var geometry = new THREE.CubeGeometry( 30, 30, 30 );
//素材(マテリアル)を作成      
var material = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
//ジオメトリーとマテリアルを組み合わせて物体(メッシュ)を作る
var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

//回転させる
function renderLoop () {
  requestAnimationFrame( renderLoop );
  mesh.rotation.set(
    0,
    mesh.rotation.y + .01,
    mesh.rotation.z + .01
  );
  //シーンをレンダリング
  renderer.render( scene, camera );
};
 
window.onload = function(){
  document.getElementById('stage').appendChild(renderer.domElement);
  renderLoop() 
}
