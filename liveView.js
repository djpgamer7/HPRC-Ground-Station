const Three = require('three');

const container = document.getElementById('liveView');

const w = container.clientWidth;
const h = container.clientHeight;

//document.appendChild(container);

console.log(w + h);

var scene = new Three.Scene();
var camera = new Three.PerspectiveCamera(75, w / h, 0.1, 1000);

var renderer = new Three.WebGLRenderer();
renderer.setSize(w, h);

camera.position.z = 3;

container.appendChild(renderer.domElement);

var cubeGeometry = new Three.BoxGeometry(1,1,1);
var cubeMaterial = new Three.MeshBasicMaterial({ 
    color: 0xFFFFFF, 
    wireframe: false 
});

var cube = new Three.Mesh(cubeGeometry, cubeMaterial);

scene.add(cube);

var update = () => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
};

var render = () => {
    renderer.render(scene, camera);
};

var gameLoop = () => {
    requestAnimationFrame(gameLoop);
    
    update();
    render();
};

gameLoop();