function resize() {
    var heights = window.innerHeight;
    document.getElementById("map").style.height = heights-52 + "px";
}

resize();

window.onresize = function() {
    resize();
};
