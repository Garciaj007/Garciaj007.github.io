var renderer;
var cam;

window.onload = (e) => {
    var scene = new THREE.Scene();
    cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    cam.position.z = 5;
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    geometry = new THREE.IcosahedronGeometry();
    var material = new THREE.MeshPhysicalMaterial({
        color: 0x9ffe1,
        emissive: 0x4000c9,
        roughness: 1,
        metalness: 1,
        reflectivity: 1
    });
    var element = new THREE.Mesh(geometry, material);
    scene.add(element);

    anime({
        targets: element.scale,
        keyframes: [{
                x: Math.random() * 3 + 2,
                y: Math.random() * 3 + 2,
                z: Math.random() * 2
            },
            {
                x: Math.random() * 3 + 2,
                y: Math.random() * 3 + 2,
                z: Math.random() * 2
            },
            {
                x: Math.random() * 3 + 2,
                y: Math.random() * 3 + 2,
                z: Math.random() * 2
            },
            {
                x: Math.random() * 3 + 2,
                y: Math.random() * 3 + 2,
                z: Math.random() * 2
            },
            {
                x: Math.random() * 3 + 2,
                y: Math.random() * 3 + 2,
                z: Math.random() * 2
            },
            {
                x: Math.random() * 3 + 2,
                y: Math.random() * 3 + 2,
                z: Math.random() * 2
            },
            {
                x: Math.random() * 3 + 2,
                y: Math.random() * 3 + 2,
                z: Math.random() * 2
            },
            {
                x: Math.random() * 3 + 2,
                y: Math.random() * 3 + 2,
                z: Math.random() * 2
            },
            {
                x: Math.random() * 3 + 2,
                y: Math.random() * 3 + 2,
                z: Math.random() * 2
            },
        ],
        duration: 5000,
        easing: 'easeInOutCirc',
        loop: true,
        direction: 'alternate'
    })

    const d = 100;

    for (var i = 0; i < 10; ++i) {
        var light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(Math.random() * d, Math.random() * d, Math.random() * d);
        scene.add(light);
        anime({
            targets: light.position,
            keyframes: [{
                    x: Math.random() * 5,
                    y: Math.random() * 5,
                    z: Math.random() * 2
                },
                {
                    x: Math.random() * 5,
                    y: Math.random() * 5,
                    z: Math.random() * 2
                },
                {
                    x: Math.random() * 5,
                    y: Math.random() * 5,
                    z: Math.random() * 2
                },
                {
                    x: Math.random() * 5,
                    y: Math.random() * 5,
                    z: Math.random() * 2
                },
            ],
            duration: 5000,
            easing: 'easeInOutCubic',
            loop: true,
            direction: 'alternate'
        });
    }
    scene.add(new THREE.DirectionalLight(0xffffff));

    setInterval(() => {
        renderer.render(scene, cam);
        //composer.render();
    }, 1000 / 60);
}

window.onresize = (e) => {
    cam.aspect = window.innerWidth / window.innerHeight;
    cam.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}