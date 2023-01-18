var svgSparkle = function (elem, vcount, vinterval) {
	// the vcount for the number of sparkles at a time
	// the vinterval for how long the sparkle would appear in ms 1000 = 1second
  var i = 0,
    x1 = elem.offset().left - 17, //17 is roughly half the size of the svg
    x2 = x1 + elem.width(),
    y1 = elem.offset().top - 17,
    y2 = y1 + elem.height(),
    img = [],
    decider;

  (function addSparkle(undefined) {
    if (img[i] === undefined) {
      //img[i] = document.createElement("IMG");
      img[i] = new Image();

      img[i].width = 35;
      img[i].height = 35;

      img[i].id = "sparkle" + i;
      img[i].src = "/sparkle.svg?t=" + new Date().getTime(); //make sure to use the full path to the svg starting from the root

      img[i].onload = function () {
        document.body.appendChild(this);
      };
    } else {
      img[i].style.display = "none";
      img[i].src = "/sparkle.svg?t=" + new Date().getTime(); // if in root/assets/images then use "/assets/images/sparkle.svg?t="
      img[i].onload = function () {
        this.style.display = "block";
      };
    }

    img[i].style.left = Math.random() * (x2 - x1) + x1 + "px";
    img[i].style.top = Math.random() * (y2 - y1) + y1 + "px";

    decider = parseInt(Math.random() * 4 + 1);

    if (decider == 2) {
      img[i].className = "sparkle small-sparkle1";
    } else if (decider == 3) {
      img[i].className = "sparkle small-sparkle2";
    } else {
      img[i].className = "sparkle";
    }

    i += 1;

    if (i > vcount) {
      i = 0;
    }

    setTimeout(addSparkle, vinterval);
  })();
};
