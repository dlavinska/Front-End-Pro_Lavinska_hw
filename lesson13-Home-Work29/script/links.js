document.querySelector(".btnFirst").addEventListener("click", function () {
    const link1 = "www.w3schools.com/js/js_htmldom_eventlistener.asp";
    if (!link1.startsWith("https")) {
        window.location.href = `https://${link1}`;
    } else if (!link1.startsWith("http")) {
        window.location.href = `http://${link1}`;
    } else {
        window.location.href = link1;
    }
});

document.querySelector(".btnSecond").addEventListener("click", function () {
    const link2 = "ithillel.ua/";
    if (!link2.startsWith("https")) {
        window.location.href = `https://${link2}`;
    } else if (!link2.startsWith("http")) {
        window.location.href = `http://${link2}`;
    } else {
        window.location.href = link2;
    }
});