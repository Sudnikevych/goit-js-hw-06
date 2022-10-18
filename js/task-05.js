// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//подставляет его текущее значение в span#name - output.
//Если инпут пустой, в спане должна отображаться строка "Anonymous".

//<input type="text" id="name-input" placeholder="Please enter your name" />
//<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputName = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

inputName.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  inputName.nameLabel.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    inputName.nameLabel.textContent = "Anonymous";
  }
}
