// HTML ELEMENT SELECTION
let previousScreen = document.querySelector(".previous-output");
let currentScreen = document.querySelector(".current-output");
let bodyOfCalculator = document.querySelector(".calculator");
let buttons = Array.from(document.querySelectorAll("button"));
let mode = document.querySelector(".theme-change");
let display = document.querySelector(".output");
let operator = document.querySelectorAll(".operator");
let allClear = document.querySelector(".all-clear");
let backspace = document.querySelector(".delete");
let numbers = document.querySelectorAll(".number");

// LOOP FOR SELECTIONG EVERY BUTTON
for (item of buttons) {
    item.addEventListener("click", (e) => {
        // PROGRAM FOR CLEARING EVERYTHING
        if (e.target.innerText == "AC") {
            currentScreen.innerText = "";
            previousScreen.innerText = "";
        }
        // PROGRAM FOR BACKSPACE
        else if (e.target.innerText == "DEL") {
            if (currentScreen.innerText) {
                currentScreen.innerText = currentScreen.innerText.slice(0, -1);
            }
        }
        // PROGRAM FOR GETTING FINAL ANS
        else if (e.target.innerText == "=") {
            // FOR CALCULATING PERCENTAGE
            if (currentScreen.innerText.includes("%")) {
                let percent = currentScreen.innerText.replace("%", "/");
                currentScreen.innerText = `(${percent})*100`;
                currentScreen.innerText = eval(currentScreen.innerText) + "%";
                previousScreen.innerText = currentScreen.innerText;
            }
            // FOR OTHER CALCULATION
            else {
                currentScreen.innerText = eval(currentScreen.innerText);
                previousScreen.innerText = currentScreen.innerText;
            }
        }
        // FOR ADDING PROPER MULTIPLICATION SIGN 
        else if (e.target.innerText == "X") {
            currentScreen.innerText += "*";
        }
        // FOR ADDING PROPER DIVIDE SIGN 
        else if (e.target.innerText == "÷") {
            currentScreen.innerText += "/";
        }
        // PROGRAM FOR MODE SWITCH
        else if (e.target.innerText == "dark_mode" || e.target.innerText == "light_mode") {
            bodyOfCalculator.classList.toggle("calculator-black");
            display.classList.toggle("output-black");
            operator.forEach((i) => { i.classList.toggle("operator-black") });
            allClear.classList.toggle("function-black");
            backspace.classList.toggle("function-black");
            numbers.forEach((number) => { number.classList.toggle("number-black") });
            mode.classList.toggle("theme-black");
            // FOR ADDING LIGHT MODE SIGN TO BUTTON
            if (mode.innerText == "dark_mode") {
                mode.innerHTML = `<span class="material-symbols-outlined">light_mode</span>`;
            }
            // FOR ADDING DARK MODE SIGN TO BUTTON
            else if (mode.innerText == "light_mode") {
                mode.innerHTML = `<span class="material-symbols-outlined">dark_mode</span>`
            }
        }
        // FOR DISPLAYING THE TYPED NUMBERS
        else { currentScreen.innerText += e.target.innerText; }
    })
}