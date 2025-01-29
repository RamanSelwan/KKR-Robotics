import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FaArrowRight } from "react-icons/fa";

function ThreeScene() {
  const mountRef = useRef(null);
  const loadedModelRef = useRef(null);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const mount = mountRef.current; // Store ref value
    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Set scene background color
    scene.background = new THREE.Color(0x111827); // Darker background for better contrast

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Increased intensity
    directionalLight.position.set(5, 5, 5); // Adjusted position
    scene.add(directionalLight);

    // Load 3D Model
    const loader = new GLTFLoader();
    let isMounted = true;

    loader.load(
      "/robot_rocket.glb", // Ensure this file is in the `public` folder
      (gltf) => {
        if (!isMounted) return;
        loadedModelRef.current = gltf.scene;

        // Scale the model to appropriate size
        loadedModelRef.current.scale.set(1, 1, 1); // Adjust these values as needed

        // Center the model
        const box = new THREE.Box3().setFromObject(loadedModelRef.current);
        const center = box.getCenter(new THREE.Vector3());
        loadedModelRef.current.position.x = -center.x;
        loadedModelRef.current.position.y = -center.y;
        loadedModelRef.current.position.z = -center.z;

        scene.add(loadedModelRef.current);
        setIsLoading(false);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("An error occurred loading the model:", error);
        setIsLoading(false);
      }
    );

    // Camera Position (adjusted for better view of the model)
    camera.position.set(4, 1, 1.5);

    // Add OrbitControls with restricted rotation
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Restrict rotation to horizontal only
    controls.minPolarAngle = Math.PI / 2; // 90 degrees
    controls.maxPolarAngle = Math.PI / 2; // 90 degrees
    controls.enableZoom = false; // Disable zooming
    controls.enablePan = false; // Disable panning

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (loadedModelRef.current) {
        // Set rotation based on time
        const time = Date.now() * 0.001; // Convert to seconds
        loadedModelRef.current.rotation.y = time * Math.PI * 0.25; // Adjust speed by changing multiplier
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement); // Use stored ref value
      controls.dispose();
    };
  }, []);

  return (
    <div className="relative h-[600px] w-full" id="home">
      <div ref={mountRef} style={{ width: "100vw", height: "100vh" }}>
        {isLoading && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "1.2rem",
              zIndex: 1000,
            }}
          ></div>
        )}
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black/56"></div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-left text-white px-4">
          <h1 className="text-2xl md:text-7xl mb-4 font-Jersey drop-shadow-lg animate__animated animate__fadeInDown animate__delay-1s ">
            Pioneering the Future of Robotics
          </h1>
          <p className="text-lg md:text-2xl mb-6 drop-shadow-lg animate__animated animate__fadeInUp animate__delay-1s">
            Empowering the next generation with cutting-edge autonomous robots
            and innovative solutions.
          </p>
          <div className=" cursor-none flex items-center animate__animated animate__fadeInRight animate__delay-2s">
            <button className="before:ease relative h-12 w-40 overflow-hidden border rounded-lg border-orange-500 bg-orange-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-orange-500 hover:before:-translate-x-40">
              <span relative="relative z-10 font-bold">Explore Solutions</span>
            </button>

            <button className="flex items-center justify-center gap-2 before:ease relative ml-10 h-12 w-40 overflow-hidden border rounded-lg border-orange-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-orange-500 hover:before:-translate-x-40">
              <span relative="relative z-10">Watch Demo</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
}

export default ThreeScene;
