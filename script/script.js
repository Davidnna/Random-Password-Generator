const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const Symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const noChar = document.getElementById("noChar");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const password = document.getElementById("password");
const password1 = document.getElementById("password1");
const error = document.getElementById("error");
const copied = document.getElementById("copied");
const noCharRegex = /^\d+$/;

function generate() {
let final = [];
    if (!noCharRegex.test(noChar.value)) {
        error.style.display = "block";
        password.textContent = "";
        password1.textContent = "";
        password.style.height = "2.6em";
        password1.style.height = "2.6em";
    }
    else {
        error.style.display = "none";
        password.textContent = "";
        password1.textContent = "";
        if (uppercase.checked) {
            final = final.concat(upperCase);
        }
        if (lowercase.checked) {
            final = final.concat(lowerCase);
        }
        if (numbers.checked) {
            final = final.concat(Numbers);
        }
        if (symbols.checked) {
            final = final.concat(Symbols);
        }
        if (uppercase.checked || lowercase.checked || numbers.checked || symbols.checked) {
            for (i = 0; i < noChar.value; i++) {
                password.textContent += final[Math.floor(Math.random() * final.length)];
                password1.textContent += final[Math.floor(Math.random() * final.length)];
                }
            password.style.height = "auto";
            password1.style.height = "auto";
            document.getElementById("checked").style.display = "none";
        } else {
            document.getElementById("checked").style.display = "block";
        }
    }
}

function copyText(char) {
    if (char.textContent.trim() !== "") {
        navigator.clipboard.writeText(char.textContent).then(() => {
            copied.style.display = "block";
            setTimeout(() => {
                copied.style.display = "none";
            }, 2000);      
        });
    }
}