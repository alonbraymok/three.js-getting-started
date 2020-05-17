import * as THREE from "three";

export function ThreeDObjects() {
  // Pyramid
  const pyramidGeometry = new THREE.CylinderGeometry(7, 0, 4, 4, 1);
  const pyramidMaterial = new THREE.MeshNormalMaterial({ color: 0x00ff00 });
  const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
  pyramid.translateY(-17);
  pyramid.rotateY(0.779);

  // Box
  const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
  const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const box = new THREE.Mesh(boxGeometry, boxMaterial);
  box.translateY(-10);

  //Arm base
  const handBaseGeometry = new THREE.CylinderGeometry(2, 5, 10, 10);
  const handBaseMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const cylinder = new THREE.Mesh(handBaseGeometry, handBaseMaterial);

  //Arm
  const handGeometry = new THREE.CylinderGeometry(1, 1, 10, 20);
  const handMaterial = new THREE.MeshBasicMaterial({ color: 0xf00f00 });
  const handCylinder = new THREE.Mesh(handGeometry, handMaterial);
  handCylinder.translateY(10);

  //Sphere
  const sphereGeometry = new THREE.SphereGeometry(2, 30, 30);
  const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xbfee34 });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.translateY(5);

  return { pyramid, box, cylinder, handCylinder, sphere };
}
