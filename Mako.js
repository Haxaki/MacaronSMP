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
    skin: "./Mako.png"
});

skinViewer.autoRotate = true;
skinViewer.autoRotateSpeed = 0.5;
skinViewer.zoom = 0.8;

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


/* ========================================
   MOUSE CONTROLS
======================================== */

const control =
    skinview3d.createOrbitControls(skinViewer);


/* Drag mouse */

control.enableRotate = true;


/* Scroll wheel */

control.enableZoom = true;


/* Disable moving the model */

control.enablePan = false;
