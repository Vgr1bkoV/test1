// import './index.css';
//import { compare } from "./logic";
// import { randomCards } from "./random_card";

window.application = {
  renderBlock: function (name, container) {
    window.application[name](container);
  },
};

let intervalId;

const globalState = {
  difficult: 1,
};

function checkFlipClass() {
  const divCards = document.querySelector('.div_cards');
  const cards = divCards.querySelectorAll('.flip');

  if (cards.length === divCards.children.length) {
    return 1;
  } else {
    return 0;
  }
}

function renderTaimer(divGameHead) {
  const divTime = document.createElement("div");
  divTime.classList.add("div_time");

  // const min = document.createElement("h1");
  // min.textContent = "min";
  // min.classList.add("min_sek");

  const sek = document.createElement("h1");
  sek.textContent = "sek";
  sek.classList.add("min_sek");

  const time = document.createElement("div");
  time.classList.add("time"); 
  time.innerHTML = 5;

  divGameHead.appendChild(divTime);
  // divTime.appendChild(min);
  divTime.appendChild(sek);
  divTime.appendChild(time);

  let flag = 1;
  intervalId = setInterval(() => {
    if (time.innerHTML > 0 && flag == 1) {
      time.innerHTML--;
    }
    else
      flag = 0;
    if (time.innerHTML >= 0 && flag == 0) {
      time.innerHTML++;
    }
  }, 1000)
}

function hideCards() {
  const memoryCards = document.querySelectorAll('div.memory-card');
  const button = document.querySelector('button');

  button.classList.remove('disabled');

  memoryCards.forEach(card => {
    card.classList.remove('flip');
    card.classList.remove('disabled');
  });
}

function showHideCards() {
  const memoryCards = document.querySelectorAll('div.memory-card');
  const button = document.querySelector('button');

  button.classList.add('disabled');
  memoryCards.forEach(card => {
    card.classList.add('flip');
    card.classList.add('disabled');
  });

  setTimeout(() => hideCards(), 5000);

}

function renderMainScreenOpenCards1(container) {
  const divGameHead = document.createElement("div");
  divGameHead.classList.add("game_header");

  renderTaimer(divGameHead);


  const button = document.createElement("button");
  button.classList.add("button", "header_button");
  button.textContent = "Начать заново";
  button.addEventListener('click', () => {
    container.innerHTML = "";
    renderMainScreenOpenCards1(container);
  })

  const divCards = document.createElement("div");
  divCards.classList.add("div_cards");

  container.appendChild(divGameHead);
  divGameHead.appendChild(button);
  container.appendChild(divCards);
  const cards = randomCards(3);
  for(let i = 0; i < cards.length; i++) {
    const memoryCard = document.createElement("div");
    memoryCard.classList.add("memory-card");

    const img = document.createElement("img");
    img.classList.add(cards[i]);

    const frontImg = document.createElement("img");
    frontImg.classList.add("card");

    memoryCard.appendChild(img);
    memoryCard.appendChild(frontImg);
    divCards.appendChild(memoryCard);
  };

 compare1(container);

  showHideCards();
}

function renderMainScreenOpenCards2(container) {
  const divGameHead = document.createElement("div");
  divGameHead.classList.add("game_header");

  renderTaimer(divGameHead);

  const button = document.createElement("button");
  button.classList.add("button", "header_button");
  button.textContent = "Начать заново";
  button.addEventListener('click', () => {
    container.innerHTML = "";
    renderMainScreenOpenCards2(container);
  })


  const divCards = document.createElement("div");
  divCards.classList.add("div_cards");

  container.appendChild(divGameHead);
  divGameHead.appendChild(button);
  container.appendChild(divCards);
  const cards = randomCards(6);
  for(let i = 0; i < cards.length; i++) {
    const memoryCard = document.createElement("div");
    memoryCard.classList.add("memory-card");

    const img = document.createElement("img");
    img.classList.add(cards[i]);

    const frontImg = document.createElement("img");
    frontImg.classList.add("card");

    memoryCard.appendChild(img);
    memoryCard.appendChild(frontImg);
    divCards.appendChild(memoryCard);
  };
  compare2(container);

  showHideCards();
}

function renderMainScreenOpenCards3(container) {
  const divGameHead = document.createElement("div");
  divGameHead.classList.add("game_header");

  renderTaimer(divGameHead);

  const button = document.createElement("button");
  button.classList.add("button", "header_button");
  button.textContent = "Начать заново";
  button.addEventListener('click', () => {
    container.innerHTML = "";
    renderMainScreenOpenCards3(container);
  })

  const divCards = document.createElement("div");
  divCards.classList.add("div_cards");

  container.appendChild(divGameHead);
  divGameHead.appendChild(button);
  container.appendChild(divCards);

  const cards = randomCards(9);
  for(let i = 0; i < cards.length; i++) {
    const memoryCard = document.createElement("div");
    memoryCard.classList.add("memory-card");

    const img = document.createElement("img");
    img.classList.add(cards[i]);

    const frontImg = document.createElement("img");
    frontImg.classList.add("card");

    memoryCard.appendChild(img);
    memoryCard.appendChild(frontImg);
    divCards.appendChild(memoryCard);
  };
  compare3(container);

  showHideCards();
}

function renderFirstPage(container) {
  const div = document.createElement("div");
  div.classList.add("square");

  const h1 = document.createElement("h1");
  h1.textContent = "Выбери сложность";
  h1.classList.add("chose_difficult");

  const divDif = document.createElement("div");
  divDif.classList.add("difficult_level");

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  div1.textContent = "1";
  div2.textContent = "2";
  div3.textContent = "3";
  div1.style.backgroundColor = '#7ac100';
  div1.classList.add("difficult_level__number");
  div1.addEventListener("click", () => {
    div1.style.backgroundColor = '#7ac100';
    div2.style.backgroundColor = 'white';
    div3.style.backgroundColor = 'white';
    globalState.difficult = 1;
  });
  div2.classList.add("difficult_level__number");
  div2.addEventListener("click", () => {
    div1.style.backgroundColor = 'white';
    div2.style.backgroundColor = '#7ac100';
    div3.style.backgroundColor = 'white';
    globalState.difficult = 2;
  });
  div3.classList.add("difficult_level__number");
  div3.addEventListener("click", () => {
    div1.style.backgroundColor = 'white';
    div2.style.backgroundColor = 'white';
    div3.style.backgroundColor = '#7ac100';
    globalState.difficult = 3;
  });
  const button = document.createElement("button");
  button.textContent = "Старт";
  button.classList.add("button");
  button.addEventListener("click", () => {
    container.innerHTML = "";
    if (globalState.difficult === 1) {
      renderMainScreenOpenCards1(container);
    }
    if (globalState.difficult === 2) {
      renderMainScreenOpenCards2(container);
    }
    if (globalState.difficult === 3) {
      renderMainScreenOpenCards3(container);
    }
  });

  container.appendChild(div);

  div.appendChild(h1);

  div.appendChild(divDif);
  divDif.appendChild(div1);
  divDif.appendChild(div2);
  divDif.appendChild(div3);

  div.appendChild(button);
}

function wictoryScreen1(container) {
  clearInterval(intervalId);
  const background = document.createElement("div");
  background.classList.add("res-background");

  const div = document.createElement("div");
  div.classList.add("tmp-div");

  const img = document.createElement("img");
  img.classList.add("wictory-png");

  const resTitle = document.createElement("h1");
  resTitle.classList.add("res-title");
  resTitle.textContent = "Вы выйграли!";

  const spentTime = document.createElement("p");
  spentTime.classList.add("spent-time");
  spentTime.textContent = "Затраченное время:";

  const resTime = document.createElement("p");
  resTime.classList.add("res-time");

  const divTime = document.querySelector('.time');

  resTime.textContent = divTime.textContent;

  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = "Играть снова";
  button.addEventListener("click", () =>{
    container.innerHTML = "";
    renderMainScreenOpenCards1(container)
  })

  container.appendChild(background);
  container.appendChild(div);
  div.appendChild(img);
  div.appendChild(resTitle);
  div.appendChild(spentTime);
  div.appendChild(resTime);
  div.appendChild(button);
}

function wictoryScreen2(container) {
  clearInterval(intervalId);
  const background = document.createElement("div");
  background.classList.add("res-background");

  const div = document.createElement("div");
  div.classList.add("tmp-div");

  const img = document.createElement("img");
  img.classList.add("wictory-png");

  const resTitle = document.createElement("h1");
  resTitle.classList.add("res-title");
  resTitle.textContent = "Вы выйграли!";

  const spentTime = document.createElement("p");
  spentTime.classList.add("spent-time");
  spentTime.textContent = "Затраченное время:";

  const resTime = document.createElement("p");
  resTime.classList.add("res-time");

  const divTime = document.querySelector('.time');

  resTime.textContent = divTime.textContent;

  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = "Играть снова";
  button.addEventListener("click", () =>{
    container.innerHTML = "";
    renderMainScreenOpenCards2(container)
  })

  container.appendChild(background);
  container.appendChild(div);
  div.appendChild(img);
  div.appendChild(resTitle);
  div.appendChild(spentTime);
  div.appendChild(resTime);
  div.appendChild(button);
}

function wictoryScreen3(container) {
  clearInterval(intervalId);
  const background = document.createElement("div");
  background.classList.add("res-background");

  const div = document.createElement("div");
  div.classList.add("tmp-div");

  const img = document.createElement("img");
  img.classList.add("wictory-png");

  const resTitle = document.createElement("h1");
  resTitle.classList.add("res-title");
  resTitle.textContent = "Вы выйграли!";

  const spentTime = document.createElement("p");
  spentTime.classList.add("spent-time");
  spentTime.textContent = "Затраченное время:";

  const resTime = document.createElement("p");
  resTime.classList.add("res-time");

  const divTime = document.querySelector('.time');

  resTime.textContent = divTime.textContent;

  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = "Играть снова";
  button.addEventListener("click", () =>{
    container.innerHTML = "";
    renderMainScreenOpenCards3(container)
  })

  container.appendChild(background);
  container.appendChild(div);
  div.appendChild(img);
  div.appendChild(resTitle);
  div.appendChild(spentTime);
  div.appendChild(resTime);
  div.appendChild(button);
}

function defeatScreen1(container) {
  clearInterval(intervalId);
  const background = document.createElement("div");
  background.classList.add("res-background");

  const div = document.createElement("div");
  div.classList.add("tmp-div");

  const img = document.createElement("img");
  img.classList.add("dead-png");

  const resTitle = document.createElement("h1");
  resTitle.classList.add("res-title");
  resTitle.textContent = "Вы програли!";

  const spentTime = document.createElement("p");
  spentTime.classList.add("spent-time");
  spentTime.textContent = "Затраченное время:";

  const resTime = document.createElement("p");
  resTime.classList.add("res-time");

  const divTime = document.querySelector('.time');

  resTime.textContent = divTime.textContent;

  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = "Играть снова";
  button.addEventListener("click", () =>{
    container.innerHTML = "";
    renderMainScreenOpenCards1(container)
  })

  container.appendChild(background);
  container.appendChild(div);
  div.appendChild(img);
  div.appendChild(resTitle);
  div.appendChild(spentTime);
  div.appendChild(resTime);
  div.appendChild(button);
}

function defeatScreen2(container) {
  clearInterval(intervalId);
  const background = document.createElement("div");
  background.classList.add("res-background");

  const div = document.createElement("div");
  div.classList.add("tmp-div");

  const img = document.createElement("img");
  img.classList.add("dead-png");

  const resTitle = document.createElement("h1");
  resTitle.classList.add("res-title");
  resTitle.textContent = "Вы програли!";

  const spentTime = document.createElement("p");
  spentTime.classList.add("spent-time");
  spentTime.textContent = "Затраченное время:";

  const resTime = document.createElement("p");
  resTime.classList.add("res-time");

  const divTime = document.querySelector('.time');

  resTime.textContent = divTime.textContent;

  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = "Играть снова";
  button.addEventListener("click", () =>{
    container.innerHTML = "";
    renderMainScreenOpenCards2(container)
  })

  container.appendChild(background);
  container.appendChild(div);
  div.appendChild(img);
  div.appendChild(resTitle);
  div.appendChild(spentTime);
  div.appendChild(resTime);
  div.appendChild(button);
}

function defeatScreen3(container) {
  clearInterval(intervalId);
  const background = document.createElement("div");
  background.classList.add("res-background");

  const div = document.createElement("div");
  div.classList.add("tmp-div");

  const img = document.createElement("img");
  img.classList.add("dead-png");

  const resTitle = document.createElement("h1");
  resTitle.classList.add("res-title");
  resTitle.textContent = "Вы програли!";

  const spentTime = document.createElement("p");
  spentTime.classList.add("spent-time");
  spentTime.textContent = "Затраченное время:";

  const resTime = document.createElement("p");
  resTime.classList.add("res-time");

  const divTime = document.querySelector('.time');

  resTime.textContent = divTime.textContent;

  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = "Играть снова";
  button.addEventListener("click", () =>{
    container.innerHTML = "";
    renderMainScreenOpenCards3(container)
  })

  container.appendChild(background);
  container.appendChild(div);
  div.appendChild(img);
  div.appendChild(resTitle);
  div.appendChild(spentTime);
  div.appendChild(resTime);
  div.appendChild(button);
}

window.application["first-page"] = renderFirstPage;

window.application.renderBlock("first-page", document.querySelector(".app"));
