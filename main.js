// Three.js background animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('background-canvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BufferGeometry();
const vertices = [];
for (let i = 0; i < 10000; i++) {
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
}
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
const particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0x00ffff, size: 2 }));
scene.add(particles);

camera.position.z = 1000;

function animate() {
    requestAnimationFrame(animate);
    particles.rotation.x += 0.0005;
    particles.rotation.y += 0.0005;
    renderer.render(scene, camera);
}
animate();

// Resize handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Scroll animations
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// GSAP animations
gsap.from('.hero h1', {opacity: 0, y: 50, duration: 1, delay: 0.5});
gsap.from('.hero p', {opacity: 0, y: 50, duration: 1, delay: 0.8});
gsap.from('.cta-button', {opacity: 0, y: 50, duration: 1, delay: 1.1});

gsap.from('.idea-card', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '#ideas',
        start: 'top 80%'
    }
});
