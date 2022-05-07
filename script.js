const boxes = document.querySelector("div.container")

for (let i=1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        const element = `<div class="fizzBuzz d-flex justify-content-center align-items-center square">FizzBuzz</div>`;
        boxes.innerHTML += element;
    }
    else if (i % 3 === 0) {
        const element = `<div class="fizz d-flex justify-content-center align-items-center square">Fizz</div>`;
        boxes.innerHTML += element;
    }
    else if (i % 5 === 0) {
        const element = `<div class="buzz d-flex justify-content-center align-items-center square">Buzz</div>`;
        boxes.innerHTML += element;
    }
    else {
        const element = `<div class="number d-flex justify-content-center align-items-center square">${i}</div>`;
        boxes.innerHTML += element;
    }
}
