var lado=1



var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;


var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();


var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

//cubo 1
var geometry = new THREE.BoxGeometry( lado , lado, lado );
var material = new THREE.MeshBasicMaterial( {color: 0xFFFF00} );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );


cube.translateX(lado/2);
cube.translateY(lado/2);
cube.translateZ(lado/2);

//cubo 2
var geometry2 = new THREE.BoxGeometry( lado/2 , lado/2, lado/2 );
var material2 = new THREE.MeshBasicMaterial( {color: 0x0000FF} );
var cube2 = new THREE.Mesh( geometry2, material2 );
scene.add( cube2 );

//funciones
cube2.translateY(lado-lado/4);

cube2.translateX(lado/2);
cube2.translateY(lado/2);
cube2.translateZ(lado/2);

// cubo 3
var geometry3 = new THREE.BoxGeometry( lado/4 , lado/4, lado/4 );
var material3 = new THREE.MeshBasicMaterial( {color: 0xFF0000} );
var cube3 = new THREE.Mesh( geometry3, material3 );
scene.add( cube3 );

//funciones 

cube3.translateY(lado+lado/8);

cube3.translateX(lado/2);
cube3.translateY(lado/2);
cube3.translateZ(lado/2);


const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

scene.add(cube)
scene.add(cube2)
scene.add(cube3)

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();