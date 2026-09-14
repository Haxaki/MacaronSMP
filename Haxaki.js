/* ========================================
   MACARON SMP — HAXAKI PROFILE
======================================== */


/* ========================================
   CREATE SKIN VIEWER
======================================== */

const skinViewer = new skinview3d.SkinViewer({

    canvas: document.getElementById("skin_container"),

    width: 400,

    height: 500,

    skin: "Kiki.png"

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