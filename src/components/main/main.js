import React, { useState, useRef, useEffect } from "react";
import "../../index.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import $ from "jquery";
import { ThreeDObjects } from "../../3D.objects/shapes";

export default function Main({ worldFocus, setWorldFocus }) {
  const mount = useRef(null);
  const controls = useRef(null);
  const test = useRef(null);
  const [isAnimating, setAnimating] = useState(true);

  useEffect(() => {
    let width = mount.current.clientWidth;
    let height = mount.current.clientHeight;
    let frameId;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    test.current = {
      camera,
      renderer,
    };
    const { pyramid, box, cylinder, handCylinder, sphere } = ThreeDObjects();

    //build scene
    const group = new THREE.Object3D();
    group.add(sphere, handCylinder);
    scene.add(group);
    scene.add(cylinder);
    scene.add(box);
    scene.add(pyramid);

    camera.position.z = 40;

    renderer.setClearColor("#000");
    renderer.setSize(width, height);

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    const animate = () => {
      renderer.render(scene, camera);
      renderScene();
      frameId = window.requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    mount.current.appendChild(renderer.domElement);

    let isDragging = false;
    let previousMousePosition = {
      x: 0,
      y: 0,
    };

    $(renderer.domElement)
      .on("mousedown", function (e) {
        isDragging = true;
      })
      .on("mousemove", function (e) {
        const deltaMove = {
          x: e.offsetX - previousMousePosition.x,
          y: e.offsetY - previousMousePosition.y,
        };

        if (isDragging && !worldFocus) {
          const deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(
              deltaMove.y * (Math.PI / 180),
              deltaMove.x * (Math.PI / 180),
              0,
              "YXZ"
            )
          );
          group.quaternion.multiplyQuaternions(
            deltaRotationQuaternion,
            group.quaternion
          );
        }

        previousMousePosition = {
          x: e.offsetX,
          y: e.offsetY,
        };
      });

    $(document).on("mouseup", function (e) {
      isDragging = false;
    });
  }, []);

  useEffect(() => {
    if (worldFocus) {
      controls.current = new OrbitControls(
        test.current.camera,
        test.current.renderer.domElement
      );
    } else if (controls.current) {
      controls.current.dispose();
    }
  }, [worldFocus]);

  return (
    <div
      className="main"
      ref={mount}
      onClick={() => setAnimating(!isAnimating)}
    />
  );
}
