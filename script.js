
//Typewriting
let text = "Progressing...";
let index = 1; //eka kirjain pysyy


const typeWriter = setInterval(() => {
    const element = document.querySelector("h3");

    
    element.textContent = text[0] + text.slice(1, index);

    index += 1;

    if (index > text.length) {
        index = 1;  // Reset 
    }

}, 200);