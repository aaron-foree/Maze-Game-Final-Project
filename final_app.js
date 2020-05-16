/*eslint-env browser*/
var c = document.getElementById("maze");
var ctx = c.getContext("2d");
var img = document.getElementById("level");
ctx.drawImage(img, 0, 0);

var sprite = document.getElementById('sprite');

var up = 0;
var left = 0;

window.onload = function () {
    spawn();
};

function spawn() {
    left += 15;
    sprite.style.left = left + 'px';
    up += 249;
    sprite.style.top = up + 'px';
}

function anim(e) {

    if (e.keyCode == 83) {
        up += 2;
        sprite.style.top = up + 'px';
    }
    if (e.keyCode == 87) {
        up -= 2;
        sprite.style.top = up + 'px';
    }
    if (e.keyCode == 68) {
        left += 2;
        sprite.style.left = left + 'px';
    }
    if (e.keyCode == 65) {
        left -= 2;
        sprite.style.left = left + 'px';
    }
    var mazeWall1 = ctx.getImageData(left - 9, up - 9, 1, 1);
    if (mazeWall1.data[2] == 105 && mazeWall1.data[1] == 18) {
        location.reload();
    }
    var mazeWall2 = ctx.getImageData(left + 17, up + 17, 1, 1);
    if (mazeWall2.data[2] == 105 && mazeWall2.data[1] == 18) {
        location.reload();
    }
    var mazeWall3 = ctx.getImageData(left - 9, up + 17, 1, 1);
    if (mazeWall3.data[2] == 105 && mazeWall3.data[1] == 18) {
        location.reload();
    }
    var mazeWall4 = ctx.getImageData(left + 17, up - 9, 1, 1);
    if (mazeWall4.data[2] == 105 && mazeWall4.data[1] == 18) {
        location.reload();
    }
}

document.onkeydown = anim;
