function setUp() {
    const myForm = document.getElementById("myForm");
    const nameElem = document.getElementById("name");
    const surnameElem = document.getElementById("surname");
    const birthdayElem = document.getElementById("birthday");
    const genderElem = document.getElementsByName("gender");
    const cityElem = document.getElementById("city");
    const adressElem = document.getElementById("adress");
    const languageElem = document.getElementsByName("language");
    const tableElem = document.getElementById("table");
    let selectedGender = "";
    let selectedLanguages = [];

    document.getElementById("display").addEventListener("click", () => {
      
        showElement(tableElem);
        hideElement(myForm);


        for(let i = 0; i < genderElem.length; i++) {
            if (genderElem[i].checked) {
                selectedGender = genderElem[i].value;
            }
        }
        
        for(let i = 0; i < languageElem.length; i++) {
            if (languageElem[i].checked) {
                selectedLanguages.push(languageElem[i].value);
            }
        }

        let newRow = tableElem.insertRow(-1);
        let newCell = newRow.insertCell(0);
        let newText = document.createTextNode(nameElem.value);
        newCell.append(newText);

        newCell = newRow.insertCell(1);
        newText = document.createTextNode(surnameElem.value);
        newCell.append(newText);

        newCell = newRow.insertCell(2);
        newText = document.createTextNode(birthdayElem.value);
        newCell.append(newText);

        newCell = newRow.insertCell(3);
        newText = document.createTextNode(selectedGender);
        newCell.append(newText);

        newCell = newRow.insertCell(4);
        newText = document.createTextNode(cityElem.value);
        newCell.append(newText);

        newCell = newRow.insertCell(5);
        newText = document.createTextNode(adressElem.value);
        newCell.append(newText);

        newCell = newRow.insertCell(6);
        newText = document.createTextNode(selectedLanguages.toString());
        newCell.append(newText);

        myForm.reset();

    });
  
}

setUp();

function showElement(element) {
    element.classList.add("show");
    element.classList.remove("hide");
}

function hideElement(element) {
    element.classList.remove("show");
    element.classList.add("hide");
}