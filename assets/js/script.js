const perfectHalf = ((1 / 37) * 360) / 2;
let currentLength = perfectHalf;
let clickCount = 0;

$(document).ready(function () {
  $(".wheel img").css({
    transition: "none",
  });

  $(".spin").click(() => {
    clickCount++;

    const fullSpins = getRandomInt(3, 4);

    let targetSector = 0;
    if (clickCount === 1) {
      targetSector = 33;
    } else if (clickCount === 2) {
      targetSector = 11;
    }

    const spininterval = targetSector * (360 / 37) + fullSpins * 360;
    currentLength += spininterval;

    $(".wheel img").css({
      transition: "transform 3s ease-out",
      transform: "rotate(" + currentLength + "deg)",
    });

    if (clickCount === 2) {
      setTimeout(() => {
        showPopup();
      }, 3000);
    }
  });
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function showPopup() {
  $("#popup-overlay").fadeIn(300);
  $(".popup-wrapper").fadeIn(300);
}

function hidePopup() {
  $(".popup-wrapper").fadeOut(300);
  $("#popup-overlay").fadeOut(300);
}

window.addEventListener("load", function () {
  const loader = document.getElementById("preloader");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});
