var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var radio=2;
var altura=2;

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
var geometry = new THREE.ConeGeometry(radio, altura, 10);
var material = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
var cone = new THREE.Mesh(geometry, material);
scene.add(cone)
cone.position.y = 0

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);


// Rotacion del cono 90 grados en el eje Y
cone.rotation.x += Math.PI / 2;
//Trasladar el cono en el eje Y
cone.translateY(altura/2);
//Escalamos el cono en el eje Y para estirarlo 
cone.scale.set(radio,3*altura,radio);
//Ahora  rotamos el cono
cone.rotation.x += Math.PI / 10.2;

cone.translateY(altura*1.05);
cone.translateZ(-radio*0.8);



scene.add(cone)
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();