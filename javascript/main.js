console.log("test");

document.getElementById("le-dragon").onclick = function () {activate()};

function activate() {
    var change = document.getElementById("le-dragon");
    change.classList.toggle("dragon");
};