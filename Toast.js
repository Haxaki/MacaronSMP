/* ========================================
   MACARON SMP — FRENCH PROFILE
======================================== */


/* ========================================
   CREATE SKIN VIEWER
======================================== */

const canvas = document.getElementById("skin_container");

console.log("skinview3d:", typeof skinview3d);
console.log("canvas:", canvas);

const skinViewer = new skinview3d.SkinViewer({
    canvas: canvas,
    width: 400,
    height: 500,
    skin: "./French.png"
});


/* ========================================
   SKIN POSITION
======================================== */

skinViewer.playerObject.position.y = -0.5;


/* ========================================
   AUTO ROTATION
======================================== */

skinViewer.autoRotate = true;
skinViewer.autoRotateSpeed = 0.5;


/* ========================================
   ZOOM
======================================== */

skinViewer.zoom = 0.8;
