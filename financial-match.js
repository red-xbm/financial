let button1 = document.getElementById("bu1");
let button2 = document.getElementById("bu2");
let p = document.querySelector(".employees .big-card .big-words");
let span = document.querySelector(".employees .big-card .small-words");
let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");

button1.onclick = function bu1() {
    button1.classList.add(`active`);

    if (button1.classList.contains("active")) {
        button2.classList.remove("active");
    }
};

button2.onclick = function bu2() {
    button2.classList.add('active');

    if (button2.classList.contains("active")) {
        button1.classList.remove('active');
    }
}
arrowRight.onclick = function arrowR() {

    if (p.classList.contains("active")) {
            p.innerHTML = "id ea repellat aliquam esse facilis veritatis ad accusamus!";
            span.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, consequuntur. nobis nemo perspiciatis labore ducimus?";
    }
}
arrowLeft.onclick = function arrowL() {

    if (p.classList.contains("active")) {
            p.innerHTML = "Up to $26,000 per W2 Employee Kept on Payroll";
            span.innerHTML = "Can qualify for multiple quarters in 2023 and 2024, up to $26,000 per W2 employee. Average credit is $200,000+";
    }
}

