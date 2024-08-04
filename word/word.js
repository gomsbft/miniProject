const number = Number(prompt("참가자는 몇명인가요?"));

const subinput = document.querySelector("input");
const subbutton = document.querySelector("button");
const subWord = document.querySelector("#word");
const subOrder = document.querySelector("#order")

let newWord;
let word;
const onInput = (e) => {
  newWord = e.target.value;
};

const onClickButton = () => {
  if(!subWord) {
    word = newWord;
    subWord.textContent = word;
    const order = Number(subOrder.textContent);
    if(order + 1 > number) {
      subOrder.textContent = 1;
    }else {
      subOrder.textContent = order + 1;
    }
  }else {
    if(word.at(-1) === newWord[0]) {
      word = newWord;
      subWord.textContent = word;
      const order = Number(subOrder.textContent);
      if(order + 1 > number) {
        subOrder.textContent = 1;
      }else {
        subOrder.textContent = order + 1;
      }
    }else {
      console.log("틀렸습니다!");
    }
  }
};

subinput.addEventListener("input", onInput);
subbutton.addEventListener("click", onClickButton);