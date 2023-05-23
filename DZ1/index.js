window.application = {
  renderBlock: function (name, container) {
    window.application[name](container);
  },
};

const globalState = {
  difficult: 1,
};

function renderTaimer(divGameHead) {
  const divTime = document.createElement("div");
  divTime.classList.add("div_time");

  const min = document.createElement("h1");
  min.textContent = "min";
  min.classList.add("min_sek");

  const sek = document.createElement("h1");
  sek.textContent = "sek";
  sek.classList.add("min_sek");

  const time = document.createElement("h1");
  time.textContent = "00:00";
  time.classList.add("time");

  divGameHead.appendChild(divTime);
  divTime.appendChild(min);
  divTime.appendChild(sek);
  divTime.appendChild(time);
}

function hideCards() {
  const memoryCards = document.querySelectorAll('div.memory-card');

  memoryCards.forEach(card => {
    card.classList.remove('flip');
    card.classList.remove('disabled');
  });
}

function showHideCards() {
  const memoryCards = document.querySelectorAll('div.memory-card');

  memoryCards.forEach(card => {
    card.classList.add('flip');
    card.classList.add('disabled');
  });

  setTimeout(() => hideCards(), 10000);

}

function renderMainScreenOpenCards1(container) {
  const divGameHead = document.createElement("div");
  divGameHead.classList.add("game_header");

  renderTaimer(divGameHead);

  const button = document.createElement("button");
  button.classList.add("button", "header_button");
  button.textContent = "Начать заново";

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

  compare(); // сравнивает карты

  showHideCards();
}

function renderMainScreenOpenCards2(container) {
  const divGameHead = document.createElement("div");
  divGameHead.classList.add("game_header");

  renderTaimer(divGameHead);

  const button = document.createElement("button");
  button.classList.add("button", "header_button");
  button.textContent = "Начать заново";

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
  compare(); // сравнивает карты

  showHideCards();

}

function renderMainScreenOpenCards3(container) {
  const divGameHead = document.createElement("div");
  divGameHead.classList.add("game_header");

  renderTaimer(divGameHead);

  const button = document.createElement("button");
  button.classList.add("button", "header_button");
  button.textContent = "Начать заново";

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
  compare(); // сравнивает карты

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

window.application["first-page"] = renderFirstPage;

window.application.renderBlock("first-page", document.querySelector(".app"));
