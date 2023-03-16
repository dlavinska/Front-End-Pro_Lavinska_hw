const generateList = function generateList(array) {
    const ul = document.createElement("ul");
    array.forEach((element) => {
        const li = document.createElement("li");
        let newElement;

        if (Array.isArray(element)) {
            newElement = generateList(element);
        } else {
            newElement = document.createTextNode(element);
        }

        li.append(newElement);
        ul.append(li);

    });

    return ul;
}

document.body.append(generateList([1, 2, 3]));
document.body.append(generateList([1, 2, [1.1, 1.2, 1.3], 3]));