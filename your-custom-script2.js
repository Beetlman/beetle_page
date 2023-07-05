var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('icosphere-container').appendChild(renderer.domElement);

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById("poop").innerText = window.innerWidth;
  document.getElementById("poop2").innerText = window.innerHeight;

});

window.addEventListener('resize', function () {
  
  document.getElementById("poop").innerText = (window.innerWidth);
  document.getElementById("poop2").innerText = (window.innerHeight);
  
  if (window.innerHeight || window.innerWidth > 2000) {
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();}
  
});



var geometry = new THREE.IcosahedronGeometry(1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x5500aa, wireframe: true, transparent: true, opacity: 0.3 }); // Set transparency with opacity
var icosphere = new THREE.Mesh(geometry, material);
scene.add(icosphere);

var blueGeometry = new THREE.IcosahedronGeometry(0.5, 1);
var blueMaterial = new THREE.MeshBasicMaterial({ color: 0x0000aa, wireframe: true });
var blueIcosphere = new THREE.Mesh(blueGeometry, blueMaterial);
blueIcosphere.position.z = -2;
scene.add(blueIcosphere);

function animate() {
  requestAnimationFrame(animate);
  icosphere.rotation.x += 0.005;
  icosphere.rotation.y += 0.001;
  blueIcosphere.rotation.x -= 0.005;
  blueIcosphere.rotation.y -= 0.01;
  renderer.render(scene, camera);
}
animate();

var video = document.getElementById("myVideo");
video.volume = 0.2; // Set the default volume to 50%







var fpsCounter = document.getElementById('fpsc');
var frameCount = 0;
var startTime = performance.now();

function updateFPS() {
  var currentTime = performance.now();
  var elapsedTime = currentTime - startTime;
  var fps = Math.round(frameCount / (elapsedTime / 1000));

  fpsCounter.textContent = 'FPS: ' + fps;

  frameCount++;
  
  if (elapsedTime >= 500) {
    // Reset counter after one second
    frameCount = 0;
    startTime = currentTime;
  }
  requestAnimationFrame(updateFPS);
}
updateFPS();




var homeButton = document.getElementById("homeButton");
var meButton = document.getElementById("meButton");
var otherButton = document.getElementById("otherButton");
// Add more button references as needed

var content = document.getElementById("content");

homeButton.addEventListener("click", function() {
  loadContent("home.html");
});

meButton.addEventListener("click", function() {
  loadContent("me.html");
});

otherButton.addEventListener("click", function() {
  loadContent("other.html");
});

// Add event listeners and content loading logic for other buttons

function loadContent(contentUrl) {
  var xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        document.body.innerHTML = xhr.responseText;
      } else {
        document.body.innerHTML = "<p>Failed to load the content.</p>";
      }
    }
  };
  
  xhr.open("GET", contentUrl, true);
  xhr.send();
}

