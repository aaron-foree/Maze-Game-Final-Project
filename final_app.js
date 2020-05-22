/*eslint-env browser*/
/*eslint-env jquery*/

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

$(document).ready(function () {
    function loop() {
        $('#fireball1').animate({
            top: '+=90',
        }, 1400, loop);
        $('#fireball1').animate({
            top: '-=90',
        }, 1400, loop);
        $('#fireball2').animate({
            top: '-=90',
        }, 1400, loop);
        $('#fireball2').animate({
            top: '+=90',
        }, 1400, loop);
        $('#fireball3').animate({
            left: '+=90',
        }, 1400, loop);
        $('#fireball3').animate({
            left: '-=90',
        }, 1400, loop);
        $('#fireball4').animate({
            top: '-=90',
        }, 1300, loop);
        $('#fireball4').animate({
            top: '+=90',
        }, 1300, loop);
        $('#fireball5').animate({
            left: '+=90',
        }, 1300, loop);
        $('#fireball5').animate({
            left: '-=90',
        }, 1300, loop);

    }
    var $target = $("#sprite");
    var $source1 = $("#portal");
    var $source2 = $("#fireball1");
    var $source3 = $("#fireball2");
    var $source4 = $("#fireball3");
    var $source5 = $("#fireball4");
    var $source6 = $("#fireball5");

    function firecollide() {
        if (collision($source2, $target) == true || collision($source3, $target) == true || collision($source4, $target) == true || collision($source5, $target) == true || collision($source6, $target) == true) {
            clearInterval(fc);
            reset();
            return;
        }

    }

    function portalcollide() {
        if (collision($source1, $target) == true) {
            clearInterval(pf);
            var location = window.location.href
            if (location.includes("level1")) {
                window.location = "final_app_level2.html";
            }
            if (location.includes("level2")) {
                window.location = "final_app_level3.html";
            }
            if (location.includes("level3")) {
                window.location = "final_app_level4.html";
            }
            if (location.includes("level4")) {
                window.location = "final_app_level5.html";
            }
            if (location.includes("level5")) {
                window.location = "final_app_level1.html";
            }
        }
    }
    loop();
    var fc = setInterval(firecollide, 10);
    var pf = setInterval(portalcollide, 10);
});

function reset() {
    location.reload();
    return;
}

function anim(e) {

    var mazeWall1 = ctx.getImageData(left - 9, up - 9, 1, 1);
    if (mazeWall1.data[2] == 105 && mazeWall1.data[1] == 18) {
        reset();
    }
    var mazeWall2 = ctx.getImageData(left + 17, up + 17, 1, 1);
    if (mazeWall2.data[2] == 105 && mazeWall2.data[1] == 18) {
        reset();
    }
    var mazeWall3 = ctx.getImageData(left - 9, up + 17, 1, 1);
    if (mazeWall3.data[2] == 105 && mazeWall3.data[1] == 18) {
        reset();
    }
    var mazeWall4 = ctx.getImageData(left + 17, up - 9, 1, 1);
    if (mazeWall4.data[2] == 105 && mazeWall4.data[1] == 18) {
        reset();
    }
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
}

document.onkeydown = anim;


function collision(s, t) {
    if (
        s.position().left < t.position().left + t.width() &&
        s.position().left + s.width() > t.position().left &&
        s.position().top < t.position().top + t.height() &&
        s.position().top + s.height() > t.position().top
    ) {
        return true;
    }
    return false;
}
