
$(document).ready(() => {
  let $target = $("#maze");
  let $source = $("#sprite");
});

function testCollision(s, t) {
  // This tests to see if the two boxes overlap
  if (
    s.position().left < t.position().left + t.width() &&
    s.position().left + s.width() > t.position().left &&
    s.position().top < t.position().top + t.height() &&
    s.position().top + s.height() > t.position().top
  ) {
    // collision detected!
    console.log("collision!");
    return true;
  }

  // no collision
  console.log("no collision");
  return false;
}

var sprite = document.getElementById('sprite');

var up = 0;
var left = 0;


function anim(e) {

    if (e.keyCode == 83) {
        up += 5;
        sprite.style.top = up + 'px';
    }
    if (e.keyCode == 87) {
        up -= 5;
        sprite.style.top = up + 'px';
    }
    if (e.keyCode == 68) {
        left += 5;
        sprite.style.left = left + 'px';
    }
    if (e.keyCode == 65) {
        left -= 5;
        sprite.style.left = left + 'px';
    }
}

document.onkeydown = anim;
