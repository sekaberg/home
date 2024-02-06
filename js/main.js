



// Event listener
window.addEventListener("resize", on_window_resize);
on_window_resize();



// Functions 
function on_window_resize() {
    var x = getComputedStyle(document.getElementById("nav-bar")).height;
    document.getElementsByClassName("container")[0].style.marginTop = x;
}