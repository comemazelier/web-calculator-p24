// Côme Mazelier
// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const num_buttons = document.querySelectorAll('.calculator__keys button:not([data-action])')

num_buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (display.textContent == "0") {
            display.textContent = button.textContent;
        } 
        else {
            display.textContent = display.textContent + button.textContent;
        }
    });
});

const action_buttons = document.querySelectorAll('.calculator__keys button[data-action]')

action_buttons.forEach(button => {
    button.addEventListener("click", () => {
        const action = button.getAttribute("data-action")
        switch (action) {
            case "add":
                display.textContent += " + ";
                break;
            case "substract":
                display.textContent += " - "
                break;
            case "multiply":
                display.textContent +=  " × "; 
                break;
            case "divide":
                display.textContent += " ÷ "
                break;
            case "clear":
                display.textContent = "0"
                break;
            case "calculate":
                display.textContent = eval( display.textContent.replace("×", "*").replace("÷", "/"));
                break;
        };
        });
});

const display = document.querySelector('.calculator__display');
