const number = Number(prompt("참가자는 몇명인가요?"));

const subinput = document.querySelector("input");
const subbutton = document.querySelector("button");

let newWord;
const onInput = (e) => {
  newWord = e.target.value;
};