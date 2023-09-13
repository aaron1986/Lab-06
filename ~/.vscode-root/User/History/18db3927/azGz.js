function myFunction() {
    let colors = ["red", "blue", "green"];

    let randomIndex = Math.floor(Math.random() * colors.length);
    let selectedColor = colors[randomIndex];

    document.body.style.backgroundColor = selectedColor;
}