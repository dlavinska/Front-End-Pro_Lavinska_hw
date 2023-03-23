const smile = document.body.querySelectorAll(".smile");

for (let i = 0; i < smile.length; i++) {
  smile[i].id = "div" + i;
  smile[i].append(document.createElement("span"));
  smile[i].onclick = counter;
}

function counter(elem) {
  const span = elem.target.querySelector("span");

  if (!span) {
    span = elem.target;
  }

  let count = parseInt(span.innerText);
  
  if (Number.isNaN(count)) {
    span.innerText = 1;
  } else {
    span.innerText = ++count;
  }
}