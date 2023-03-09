document.getElementById("text").onfocus = () => {
    document.getElementById("spook").style.display = "block";

};

document.getElementById("text").onblur = () => {
    document.getElementById("spook").style.display = "none";

};