canvas = new fabric.Canvas("myCanvas");
ctx = canvas.getContext("2d");

by = 0;
bx = 0;
hy = 400;
hx = 800;

function upload_hole() {
    fabric.Image.fromURL('aDS.jpg', function(Img) {
        bio = Img;

        bio.scaleToWidth(50);
        bio.scaleToHeight(50);
        bio.set({
            top: hy,
            left: hx
        });
        canvas.add(bio);
    });
    new_image();
}

function new_image() {
    fabric.Image.fromURL('e9ea1149359a3d087f5bd946372ab840.png', function(Img) {
        tio = Img;

        tio.scaleToWidth(50);
        tio.scaleToHeight(50);
        tio.set({
            top: by,
            left: bx
        });
        canvas.add(tio);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    kp = e.keyCode;
    console.log(kp)
    if (kp == "37") {
        Left();
        obx();
    }
    if (kp == "38") {
        Top();
        obx();
    }
    if (kp == "39") {
        Right();
        obx();
    }
    if (kp == "40") {
        Down();
        obx();
    }
}

function Left() {
    if (bx >= 0) {
        bx = bx - 5;
        upload_hole();
        new_image();
    }
}

function Top() {
    if (by >= 0) {
        by = by - 5;
        upload_hole();
        new_image();
    }
}

function Right() {
    if (bx <= 1245) {
        bx = bx + 5;
        upload_hole();
        new_image();
    }
}

function Down() {
    if (by <= 645) {
        by = by + 5;
        upload_hole();
        new_image();
    }
}

function obx() {
    if ((bx == hx) && (by == hy)) {
        canvas.remove(ball_obj);
        document.getElementById("desc").innerHTML = "[: You Have Hit The Goal! :]";
        document.getElementById("myCanvas").style.borderColor = "red";
    }
}