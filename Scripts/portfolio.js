var button = document.getElementById("GText");
var button2 = document.getElementById("SText");
var graphicContainer = document.getElementById("graphicContainer");
var XButton = document.getElementById("XButton");
var XButton2 = document.getElementById("XButton2");

button.addEventListener("click", function() {
    button.classList.toggle("GClicked");
    button2.classList.toggle("SClicked");
    button.classList.toggle("GHover");
    button2.classList.toggle("SHover");
    
    // Add a 2-second delay before moving the container up
    setTimeout(function() {
        graphicContainer.style.top = "50%";
        graphicContainer.style.transform = "translateX(-50%) translateY(-50%)";
    }, 750); // 2000 milliseconds (2 seconds) delay
});

button2.addEventListener("click", function() {
    button.classList.toggle("GClicked");
    button2.classList.toggle("SClicked");
    button.classList.toggle("GHover");
    button2.classList.toggle("SHover");
    
    // Add a 2-second delay before moving the container up
    setTimeout(function() {
        softwareContainer.style.top = "50%";
        softwareContainer.style.transform = "translateX(-50%) translateY(-50%)";
    }, 750); // 2000 milliseconds (2 seconds) delay
});

XButton.addEventListener("click", function refreshPage(){
    window.location.reload();
});

XButton2.addEventListener("click", function refreshPage(){
    window.location.reload();
});
