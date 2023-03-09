// Два варіанти вирішення завдання

// Перший варіант
const img = document.createElement("img");

img.src = "images/" + Math.ceil(Math.random() * 9) + ".jpg";

img.setAttribute("width", "600px");
img.setAttribute("height", "400px");
img.alt = "coding picture";

const src = document.getElementById("picture-box");

src.append(img);

// Другий варіант

// function getImage() {
//   return '<img src="images/' + Math.ceil(Math.random() * 9) + '.jpg" width="600" height = "400" />';
// }

// document.getElementById('picture-box').innerHTML = getImage();