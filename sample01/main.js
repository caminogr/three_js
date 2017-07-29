var scene    = new THREE.Scene();

var width = 640;
var height = 480;

var geometry = new THREE.CubeGeometry(100, 100, 100);
// var texture  = new THREE.ImageUtils.loadTexture('images/wanko.jpg');
// var material = new THREE.MeshLambertMaterial({map: texture});
var material = new THREE.MeshPhongMaterial( { color: 0x0000aa } );

var mesh     = new THREE.Mesh(geometry, material);
// mesh.rotation = {x: 0.5, y: 0.5, z: 0.0};

var camera   = new THREE.PerspectiveCamera(40, width / height, 1, 1000);
camera.position.z = -400;
camera.lookAt(mesh.position);

scene.add(mesh);
      //光源を用意(さまざまな種類あり)
var light    = new THREE.DirectionalLight(0xffffff, 1000); // 光源の色, 強さ
light.position = {x: 0, y: 0.2, z: 1} // 光源の位置
scene.add(light);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

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


//
// function renderloop () {
//   requestanimationframe( renderloop );
//   mesh.rotation.set(
//     0,
//     mesh.rotation.y + .01,
//     mesh.rotation.z + .01
// );
//   renderer.render(scene, camera);
//
// };


// マウスで操作
// var mousedown = false;
// renderer.domElement.addEventListener('mousedown', function(e){
//   mousedown = true;
//   prevPosition = {x: e.pageX, y: e.pageY};
// }, false);
// renderer.domElement.addEventListener('mousemove', function(e){
//   if(!mousedown) return;
//   moveDistance = {x: prevPosition.x - e.pageX, y: prevPosition.y - e.pageY};
//   mesh.rotation.x += moveDistance.y * 0.01;
//   mesh.rotation.y -= moveDistance.x * 0.01;
//
//   prevPosition = {x: e.pageX, y: e.pageY};
//   render();
// }, false);
// renderer.domElement.addEventListener('mouseup', function(e){
//   mousedown = false;
// }, false);
// renderer.domElement.addEventListener('mouseout', function(e){
//   mousedown = false;
// }, false);
//

function render(){
  // renderLoop()
  // renderer.render(scene, camera);
}

window.onload = function(){
  document.getElementById('canvas-wrapper').appendChild(renderer.domElement);
  // render();
  renderLoop()
}
// window.onload = function(){
//   document.getElementById('canvas-wrapper').appendChild(renderer.domElement);
//         // ( function renderLoop () {
//         // requestAnimationFrame( renderLoop );
//         // mesh.rotation.set(
//         //   0,
//         //   mesh.rotation.y + .01,
//         //   mesh.rotation.z + .01
//         // );
//         //シーンをレンダリング
//         renderer.render( scene, camera );
//       // } )();
//
//   // renderer.render(scene, camera);
// }
 
