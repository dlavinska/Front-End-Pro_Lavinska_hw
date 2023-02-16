
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(length, characters) {

    let str = "";
    
    while (str.length < length) {
        str += characters[Math.floor(Math.random() * characters.length)];
    }

    return str;

}

const key = generateKey(16, characters);
console.log(key);
