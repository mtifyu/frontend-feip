const texts = ["Первый текст", "Второй текст", "Третий текст"];
let index = 0;

function changeText() {
    const button = document.getElementById("button");
    const textElement = document.getElementById("text");
    textElement.textContent = texts[index];
    index = (index + 1) % texts.length; 
}