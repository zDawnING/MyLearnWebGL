var THREE = require('three');

import arrowImg from "res_gl/img/arrows.png";

export const createArrow = (sceneOrtho) => {
  let width = window.innerWidth / 2
  let height = window.innerHeight / 2

  let texture = new THREE.TextureLoader().load(arrowImg, () => {
    let material = new THREE.SpriteMaterial({map: texture})
    let arrow = new THREE.Sprite(material)
    let mapWidth = material.map.image.width
    let mapHeight = material.map.image.height
    let scale = 0.2
    // arrow.center.set(1.0, 1.0)
    arrow.material.rotation = -Math.PI * 0.25
    arrow.scale.set( scale * mapWidth, scale * mapHeight, 1 );
    arrow.position.set( width - (scale * mapWidth * 0.5), height - (scale * mapHeight * 0.5), 1 );
    sceneOrtho.add(arrow)
    return arrow
  })
}


